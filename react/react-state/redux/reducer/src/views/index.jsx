import { useSelector, useDispatch } from "react-redux"

export default function Index() {
//read state
const users = useSelector(state => state.users)

//mutate state
const dispatch  = useDispatch()

//set loggedUser
const loggedUser = {
  username: 'Mustafa',
  password: "9090",
  role: "admin"
}
  return (
    <>
      <h1>Home</h1>
        {!users.username ? <h2>Please login...</h2> : <p>{users.username} / {users.role} / {users.password}</p>  }
        <div>
          <button onClick={() => dispatch({type: 'login', payload: loggedUser})}>Login</button>
          <button onClick={() => dispatch({type: 'logout'})}>Logout</button>
        </div>
    </>
  )
}