import { NavLink, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  const deleteLoggedUser = () => {
    localStorage.removeItem("loggedUser");
    navigate('/login')
  }
  return (
    <>
      <nav className="navbar">
        <div>
          <NavLink to="/" className="links">Home</NavLink>
          <NavLink to="/admin" className="links">Admin</NavLink>
        </div>
        <div>
          <NavLink to="/login" className="links">Login</NavLink>
          <button className="logout" onClick={deleteLoggedUser}>Logout</button>
        </div>
      </nav>
    </>
  )
}

