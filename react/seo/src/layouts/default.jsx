import Navbar from '@/components/navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function Default() {
  return (
    <>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </>
  )
}
