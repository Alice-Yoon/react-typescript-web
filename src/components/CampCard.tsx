import React from 'react'

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
    <article>
      <strong>{status}</strong>
      <h1>{title}</h1>
      <strong>{startDate} 시작</strong>
    </article>
  )
}

export default CampCard
