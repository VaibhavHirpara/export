import React from 'react'
import Scroll  from "./Scroll";

const Layout = ({children}) => {
  return (
    <div>
  <Scroll/>
        {children}
    </div>
  )
}

export default Layout
