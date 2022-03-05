import React from 'react'
import Styles from './CampCard.module.css'

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
    <article className={Styles.container}>
      <strong className={Styles.strongTag}>{status}</strong>
      <h1 className={Styles.title}>{title}</h1>
      <strong className={Styles.strongTag}>{startDate} 시작</strong>
    </article>
  )
}

export default CampCard
