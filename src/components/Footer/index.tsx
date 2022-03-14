import React from 'react'
import styled, {css} from 'styled-components'
import { useResponsiveContext } from '../../store/responsive'

const Footer = () => {
  const screenSize = useResponsiveContext()

  return (
    <Container isMobile={screenSize.isMobile}>
      {
        screenSize.isDesktop ? 
        (
          <div className="content">
            <h1 className="logo">caffein</h1>
            <div>
              <dl>
                <div className="horizontal companyInfo">
                  <div className="horizontal">
                    <dt>대표:</dt>
                    <dd>나대표</dd>
                  </div>
                  <div>
                    <dt className="srOnly">주소:</dt>
                    <dd>서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</dd>
                  </div>
                </div>
                <div className="horizontal">
                  <dt className="srOnly">저작권:</dt>
                  <dd>Copyright by (주)카페인. All right reserved.</dd>
                </div>
              </dl>
              <div className="policyinfo">
                <a>이용약관</a>
                <a>개인정보처리방침</a>
              </div>
            </div>
            <div className="snsLogos">
              <img className="snsLogo" src="" alt=""/>
              <img className="snsLogo" src="" alt=""/>
              <img className="snsLogo" src="" alt=""/>
            </div>
          </div>
        )
        :
        (
          <div className="content">
            <div className='horizontal space-between'>
              <h1 className="logo">caffein</h1>
              <div className="snsLogos">
                <img className="snsLogo" src="" alt=""/>
                <img className="snsLogo" src="" alt=""/>
                <img className="snsLogo" src="" alt=""/>
              </div>
            </div>
            <div>
              <dl>
                <div className="horizontal companyInfo">
                  <div className="horizontal">
                    <dt>대표:</dt>
                    <dd>나대표</dd>
                  </div>
                  <div>
                    <dt className="srOnly">주소:</dt>
                    <dd>서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</dd>
                  </div>
                </div>
                <div className="horizontal copyright">
                  <dt className="srOnly">저작권:</dt>
                  <dd>Copyright by (주)카페인. All right reserved.</dd>
                </div>
              </dl>
              <div className="policyinfo">
                <a>이용약관</a>
                <a>개인정보처리방침</a>
              </div>
            </div>
          </div>
        )
      }
    </Container>
  )
}

export default Footer

const Container = styled.footer<{ isMobile: boolean }>`
  background-color: #eee;
  padding: 32px 0;
  margin-top: 242px;
  color: #616161;

  ${(props) => 
    props.isMobile && 
      css`
        margin: 0;
        padding-left: 10px;
        padding-right: 10px;
      `
    }

  .content {
    max-width: 960px;
    margin: 0 auto;
    ${(props) => 
      !props.isMobile &&
      css`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      `
    }
  }

  .logo {
    color: #7471ff;
    font-size: 20px;
  }

  .companyInfo {
    margin-bottom: 20px;
    ${(props) => 
      props.isMobile && 
      css`
        margin-top: 20px;
        font-size: 12px;
      `
    }
  }

  .copyright {
    font-size: 12px;
  }

  .policyinfo {
    display: flex;
    gap: 10px;
    ${(props) => 
      props.isMobile && 
      css`
        font-size: 12px;
      `
    }
  }

  .snsLogos {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .snsLogo {
    border-radius: 50%;
    background-color: #ccc;
    width: 30px;
    height: 30px;
    padding: 10px;
  }

  .srOnly {
    display: none;
  }

  .horizontal {
    display: flex;
    align-items: center;
  }

  .space-between {
    justify-content: space-between;
  }
`
