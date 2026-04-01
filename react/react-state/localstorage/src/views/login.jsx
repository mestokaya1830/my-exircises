import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export default function Login() {
  //get login data
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  
  const handleInput = (e) => {
    setData(item => ({...item, [e.target.name]: e.target.value}))
  }

  //login
  const loginUser = (e) => {
    e.preventDefault()
    localStorage.setItem('loggedUser', JSON.stringify(data))
    navigate('/admin')
  }

  //check user
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('loggedUser'))){
      navigate('/admin')
    }
  })
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Username..." onChange={handleInput} />
        <input type="password" name="password" placeholder="Passoword..." onChange={handleInput}/>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}