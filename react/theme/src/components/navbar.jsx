import { NavLink } from "react-router-dom"

export default function navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="links">Home</NavLink>
      </nav>
    </>
  )
}
