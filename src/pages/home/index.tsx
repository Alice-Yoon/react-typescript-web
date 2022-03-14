import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CampCard from '../../components/CampCard'
import CommunityCard from '../../components/CommunityCard'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

import homeHeaderImage from '../../assets/images/home_header_image.png'

const Home = () => {
  return (
    <Container>
      <header className="header">
        <div className="container">
          <Navigation />
          <div className="headerContents">
            <h2 className="headerTitle">
              개발은 <br />카페인과 함께
            </h2>
            <img 
              className="headerImage"
              src={homeHeaderImage} 
              alt={homeHeaderImage} 
            />
          </div>
        </div>
      </header>

      <main className="container">
        {/* 캠프 리스트 */}
        <section>
          { 
            DUMMY_CAMPDATA && DUMMY_CAMPDATA.map(data => (
              <div key={data.type.value}>
                <h1 className="cardListTitle">{data.type.text}</h1>
                <ul className="cardList">
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
        <div className="banner">
          <p>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</p>
        </div>

        {/* 커뮤니티 리스트 */}
        <section>
          <h1>커뮤니티</h1>
          <div className="cardList">
          { 
            DUMMY_COMMUNITYDATA && DUMMY_COMMUNITYDATA.map((data => (
              <CommunityCard key={data.id}  contentData={data} />  
            )))
          }
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  .container {
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
  }

  .header {
    background: linear-gradient(97.88deg, #854BFF -84.42%, #7179FF 15.02%, #6D83FF 36.89%, #698BFF 54.79%, #6499FF 80.65%, #659BF7 108.49%, #669FEA 148.27%, #69A9CD 197.99%, #6CB1B2 239.75%);
    width: 100%;
    padding-bottom: 56px;
    margin-bottom: 64px;
  }

  .headerContents {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 50px;
  }

  .headerTitle {
    font-size: 48px;
    color: #fff;
  }

  .headerImage {
    width: 600px;
    height: 400px;
  }


  .cardListTitle {
    font-size: 24px;
  }

  .cardList {
    display: flex;
    gap: 21.5px;
  }


  .banner {
    background-color: #7471FF;
    padding: 33px 42px;
    font-size: 24px;
    color: #fff;
    margin: 89px 0;
  }

`

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
