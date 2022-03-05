import React from 'react'
import Styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.logo}>caffein</h1>
        <div>
          <dl>
            <div className={`${Styles.horizontal} ${Styles.companyInfo}`}>
              <div className={Styles.horizontal}>
                <dt>대표:</dt>
                <dd>나대표</dd>
              </div>
              <div>
                <dt className={Styles.srOnly}>주소:</dt>
                <dd>서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</dd>
              </div>
            </div>
            <div className={Styles.horizontal}>
              <dt className={Styles.srOnly}>저작권:</dt>
              <dd>Copyright by (주)카페인. All right reserved.</dd>
            </div>
          </dl>
          <div className={Styles.policyinfo}>
            <a>이용약관</a>
            <a>개인정보처리방침</a>
          </div>
        </div>
        <div className={Styles.snsLogos}>
          <img className={Styles.snsLogo} src="" alt=""/>
          <img className={Styles.snsLogo} src="" alt=""/>
          <img className={Styles.snsLogo} src="" alt=""/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
