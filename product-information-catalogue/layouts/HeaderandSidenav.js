import React from 'react'
import Header from '../components/Navbar/Header'
import Sidenav from '../components/Navbar/Sidenav'

function HeaderandSidenav({ children }) {
  return (
    <div>
      <Header/>
      <Sidenav/>
      {children}
    </div>
  )
}

export default HeaderandSidenav
