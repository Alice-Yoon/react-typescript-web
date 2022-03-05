import React from 'react'
import Styles from './CommunityCard.module.css'

type MentorAnswer = {
  id: number;
  mentor: string;
  content: string;
}

type CommunityData = {
  id: number;
  title: string;
  content: string;
  answers: MentorAnswer[];
  isTop?: boolean;
  field?: string;
}

type CommunityCardProps = {
  contentData: CommunityData;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ contentData }) => {
  const { title, content, answers, isTop, field } = contentData
  
  return (
    <article className={Styles.container}>
      <header className={Styles.header}>
        {isTop && <strong className={`${Styles.tag} ${Styles.tagTop}`}>조회수 TOP</strong>}
        {field && <strong className={Styles.tag}>{field}</strong>}
      </header>
      <h1 className={Styles.title}>{title}</h1>
      <p className={Styles.content}>{content}</p>
      <ol className={Styles.answerContainer}>
        {
          answers.map(answer => (
            <li key={answer.id} className={Styles.answerList}>
              <img className={Styles.mentorImg} src="" alt=""/>
              <div>
                <strong className={Styles.mentorId}>{answer.mentor}</strong>
                <p className={Styles.answerContent}>{answer.content}</p>
              </div>
            </li>
          ))
        }
      </ol>
      <div className={Styles.btnContainer}>
        <button className={Styles.showMoreBtn}>+더보기</button>
      </div>
    </article>
  )
}

export default CommunityCard
