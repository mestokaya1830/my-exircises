import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Admin() {
  const navigate = useNavigate()
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
  
  useEffect(() => {
    if(loggedUser === null){
      navigate('/login')
    }
  })
  return (
    <>
      <h1>Admin</h1>
      {loggedUser && loggedUser.username} / {loggedUser && loggedUser.password}
    </>
  )
}
