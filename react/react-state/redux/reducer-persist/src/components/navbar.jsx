import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/admin" className="links">Admin</NavLink>
      </nav>
    </>
  )
}