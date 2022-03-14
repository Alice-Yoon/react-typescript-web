import React from 'react'
import styled, {css} from 'styled-components'

import bgImg from '../../assets/images/camp_image.svg'
import { useResponsiveContext } from '../../store/responsive';

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

  const screenSize = useResponsiveContext()

  return (
    <Container isMobile={screenSize.isMobile}>
      <strong className="strongTag">{status}</strong>
      <h1 className="title">{title}</h1>
      <strong className="strongTag">{startDate} 시작</strong>
    </Container>
  )
}

export default CampCard

const Container = styled.article<{ isMobile: boolean }>`
  border-radius: 6px;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  padding: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  ${(props) => props.isMobile ? css`width: 90%;` : css`width: 224px;`}

  .title {
    font-weight: bold;
  }

  .strongTag {
    font-weight: normal;
  }

`
