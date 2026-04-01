
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/about" className="links">About</NavLink>
        <NavLink to="/contact" className="links">Contact</NavLink>
      </nav>
    </>
  )
}
