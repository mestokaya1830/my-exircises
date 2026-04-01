import { Outlet } from "react-router-dom"
import Navbar from '../components/navbar.jsx'

export default function defaut() {
  return (
    <>
      <Navbar />
      <main className="router">
        <Outlet />
      </main>
    </>
  )
}
