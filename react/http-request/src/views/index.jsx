import { useState, useEffect } from "react"
import axios from "axios"

export default function Index() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    //fetch api promise-------------------------------
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(data => setUsers(data))
    //   .catch(err => console.log(err))


    //fetch api async-await---------------------------
    // const getUsers = async() => {
    //   const result = await fetch('https://jsonplaceholder.typicode.com/users')
    //   setUsers(await result.json())
    // }
    // getUsers()


    //axios------------------------------------------
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setUsers(res.data)
    })
  })
  return (
    <>
      <h1>Home</h1>

      <ul>
        {users && users.map(item => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.email}</span>
          </li>
        ))}
      </ul>
    </>
  )
}