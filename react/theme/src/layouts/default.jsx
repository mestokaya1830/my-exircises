import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar.jsx'
import { ThemeContext } from '../context/themeProvider.jsx'

export default function Default() {
  const { theme } = useContext(ThemeContext)
  return (
    <div id={theme}>
    <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </div>
  )
}
