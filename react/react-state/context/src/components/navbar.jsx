import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authProvider.jsx"

export default function Navbar() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/login" className="links">Login</NavLink>
        {user !== null ? <div className="links">{user.username}</div>: <div className="links">Please login!</div>}
      </nav>
    </>
  )
}
