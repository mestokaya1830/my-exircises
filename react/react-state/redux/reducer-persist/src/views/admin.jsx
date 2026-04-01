import { useSelector } from "react-redux"

export default function Admin() {
  const users = useSelector(state => state.users)
  return (
    <>
      <h1>Admin</h1>
      {!users.username ? <h2>{"Please login..."}</h2> : <h2>Welcome {users.username}</h2>}
    </>
  )
}