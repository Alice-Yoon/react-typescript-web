import React from 'react'

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
    <article>
      <header>
        {isTop && <strong>조회수 TOP</strong>}
        {field && <strong>{field}</strong>}
      </header>
      <h1>{title}</h1>
      <p>{content}</p>
      <ol>
        {
          answers.map(answer => (
            <li key={answer.id}>
              <img src="" alt="사진"/>
              <strong>{answer.mentor}</strong>
              <p>{answer.content}</p>
            </li>
          ))
        }
      </ol>
      <button>+더보기</button>
    </article>
  )
}

export default CommunityCard
