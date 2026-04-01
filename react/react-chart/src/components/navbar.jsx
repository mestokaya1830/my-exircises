import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="links">Line</NavLink>
        <NavLink to="/bar" className="links">Bar</NavLink>
        <NavLink to="/pie" className="links">Pie</NavLink>
      </nav>
    </>
  )
}
