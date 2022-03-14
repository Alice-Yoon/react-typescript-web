import React from 'react'
import styled from 'styled-components'

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
    <Container>
      <header>
        {isTop && <strong className="tag tagTop">조회수 TOP</strong>}
        {field && <strong className="tag">{field}</strong>}
      </header>
      <h1 className="title">{title}</h1>
      <p className="content">{content}</p>
      <ol className="answerContainer">
        {
          answers.map(answer => (
            <li key={answer.id} className="answerList">
              <img className="mentorImg" src="" alt=""/>
              <div>
                <strong className="mentorId">{answer.mentor}</strong>
                <p className="answerContent">{answer.content}</p>
              </div>
            </li>
          ))
        }
      </ol>
      <div className="btnContainer">
        <button className="showMoreBtn">+더보기</button>
      </div>
    </Container>
  )
}

export default CommunityCard

const Container = styled.article`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 224px;
  padding: 16px;

  header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tag {
    border-radius: 5px;
    background-color: #eee;
    padding: 4px;
  }

  .tagTop {
    background-color: #7471ff;
    color: #fff;
  }

  .title {
    font-size: 16px;
  }

  .content {
    font-size: 14px;
    margin-bottom: 62px;
  }

  .answerContainer {
    margin-bottom: 15px;;
  }

  .answerList {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mentorImg {
    border-radius: 50%;
    background-color: #eee;
    width: 30px;
    height: 30px;
    padding: 10px;
  }

  .answerContent {
    font-size: 12px;
  }

  .mentorId {
    font-size: 14px;
  }

  .btnContainer {
    display: flex;
    justify-content: center;
  }

  .showMoreBtn {
    border: none;
    background: transparent;
    color: #24dbaf;
    font-size: 12px;
  }
`