import { NavLink } from "react-router-dom";

export default function Index() {
  const users = [
    {id:1, username: 'Mesto'},
    {id:2, username: 'Deniz'},
    {id:3, username: 'Bidik'}
  ]
  return (
    <>
      <h1>Users</h1>
      {users.map(item => (
        <div className="list" key={item.id}>
          <span>{item.id}</span>
          <span>{item.username}</span>
          <NavLink to={`/admin/user/${item.id}`}>Details</NavLink>
        </div>
      ))}
    </>
  )
}