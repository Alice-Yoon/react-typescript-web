import React from 'react'
import styled from 'styled-components'

import bgImg from '../../assets/images/camp_image.svg'

type CampData = {
  id: number;
  status: string;
  title: string;
  startDate: string;
}

type CampCardProps = {
  contentData: CampData;
}

const CampCard: React.FC<CampCardProps> = ({ contentData }) => {
  const { status, title, startDate } = contentData

  return (
    <Container>
      <strong className="strongTag">{status}</strong>
      <h1 className="title">{title}</h1>
      <strong className="strongTag">{startDate} 시작</strong>
    </Container>
  )
}

export default CampCard

const Container = styled.article`
  border-radius: 6px;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 224px;
  height: 280px;
  padding: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .title {
    font-weight: bold;
  }

  .strongTag {
    font-weight: normal;
  }

`
