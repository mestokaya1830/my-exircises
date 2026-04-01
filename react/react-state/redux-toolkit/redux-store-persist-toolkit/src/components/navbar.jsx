import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'

export default function Navbar() {
  const auth = useSelector(state => state.auth.value)
  return (
    <>
      <nav className="navbar">
        <div>
          <NavLink to="/" className="links">Home</NavLink>
          <NavLink to="/admin" className="links">Admin</NavLink>
        </div>
        {auth !== "" ?  <div className="links">{auth}</div> : ""}
      </nav>
    </>
  )
}