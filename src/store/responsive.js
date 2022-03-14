import React, { createContext, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

const ResponsiveContext = createContext()
export const useResponsiveContext = () => useContext(ResponsiveContext)

const ResponsiveStore = (props) => {
  const screenSize = {
    isMobile: useMediaQuery({ query: "(max-width: 680px)" }),
    isDesktop: useMediaQuery({ query: "(min-width: 680px)" })
  }
  
  return (
    <ResponsiveContext.Provider value={screenSize}>
      {props.children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveStore
