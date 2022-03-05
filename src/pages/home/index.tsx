import React, { Fragment } from 'react'
import Styles from './Home.module.css'
import { Link } from 'react-router-dom'

import CampCard from '../../components/CampCard'
import CommunityCard from '../../components/CommunityCard'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

import homeHeaderImage from '../../assets/images/home_header_image.png'

const Home = () => {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.container}>
          <Navigation />
          <div className={Styles.headerContents}>
            <h2 className={Styles.headerTitle}>
              개발은 <br />카페인과 함께
            </h2>
            <img 
              className={Styles.headerImage} 
              src={homeHeaderImage} 
              alt={homeHeaderImage} 
            />
          </div>
        </div>
      </header>

      <main className={Styles.container}>
        {/* 캠프 리스트 */}
        <section>
          { 
            DUMMY_CAMPDATA && DUMMY_CAMPDATA.map(data => (
              <div key={data.type.value}>
                <h1 className={Styles.cardListTitle}>{data.type.text}</h1>
                <ul className={Styles.cardList}>
                  {data.camps.map(camp => (
                    <li key={camp.id}>
                      <Link to={`/campDetail/${camp.id}`}>
                        <CampCard contentData={camp} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </section>

        {/* 배너 */}
        <div className={Styles.banner}>
          <p>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</p>
        </div>

        {/* 커뮤니티 리스트 */}
        <section>
          <h1>커뮤니티</h1>
          <div className={Styles.cardList}>
          { 
            DUMMY_COMMUNITYDATA && DUMMY_COMMUNITYDATA.map((data => (
              <CommunityCard key={data.id}  contentData={data} />  
            )))
          }
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home

// dummy
const DUMMY_CAMPDATA = [
  {
    type: {value: 1, text: '인기 부트 캠프'},
    camps: [
      { id:1, status: '모집중', title: '직접 해보는 페이스북 마케팅 실무', startDate: '2022-02-28' },
      { id:2, status: '모집중', title: 'React 실무 프로젝트로 역량 업그레이드', startDate: '2022-01-09' },
      { id:3, status: '모집중', title: '개발자 없이 SQL로 데이터 추출하고 대시보드 만들기', startDate: '2022-02-13' },
    ]
  },
  {
    type: {value: 2, text: '특가 할인 캠프'},
    camps: [
      { id:1, status: '모집중', title: '직접 해보는 페이스북 마케팅 실무', startDate: '2022-02-28' },
      { id:2, status: '모집중', title: 'React 실무 프로젝트로 역량 업그레이드', startDate: '2022-01-09' },
      { id:3, status: '모집중', title: '개발자 없이 SQL로 데이터 추출하고 대시보드 만들기', startDate: '2022-02-13' },
    ]
  }
]

const DUMMY_COMMUNITYDATA = [
  { 
    id:1, 
    title: '합격 메일 답장 어떻게 할까요?', 
    content: '고칠 부분이 있는지 봐주시면 감사하겠습니다!', 
    answers: [
      {id: 1, mentor: '멘토1', content: '안녕하세요. 먼저 면접까지...'}, 
      {id: 2, mentor: '멘토2', content: '안녕하세요. 먼저 면접까지...'}
    ],
    isTop: true,
    field: '취업 고민'
  },
  { 
    id:2, 
    title: '합격 메일 답장 어떻게 할까요?222', 
    content: '고칠 부분이 있는지 봐주시면 감사하겠습니다!222', 
    answers: [
      {id: 1, mentor: '멘토3', content: '안녕하세요. 먼저 면접까지...'}, 
      {id: 2, mentor: '멘토4', content: '안녕하세요. 먼저 면접까지...'}
    ],
    isTop: true,
    field: '취업 고민'
  },
]
