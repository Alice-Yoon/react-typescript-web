import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Container>
      <h1 className="logo">Caffein</h1>
      <a className="icon">
        Icon
        {/* Icon */}
      </a>
    </Container>
  )
}

export default Navigation

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 24px;
    color: #fff;
  }

  .icon {
    border: 1px solid green;
  }
`
