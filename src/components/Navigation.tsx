import React from 'react'
import Styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={Styles.nav}>
      <h1 className={Styles.logo}>Caffein</h1>
      <a className={Styles.icon}>
        Icon
        {/* Icon */}
      </a>
    </nav>
  )
}

export default Navigation
