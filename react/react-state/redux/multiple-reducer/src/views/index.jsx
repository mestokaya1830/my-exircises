import { useSelector, useDispatch } from "react-redux"

export default function Index() {
  //read state
const counter = useSelector(state => state.counter)
const auth = useSelector(state => state.auth)

//mutate state
const dispatch  = useDispatch()
  return (
    <>
      <h1>Home</h1>
        <h2>Counter {counter}</h2>
        <div>
          <button onClick={() => dispatch({type:"increament"})}>Increament</button>
          <button onClick={() => dispatch({type:"decreament"})}>Decreament</button>
        </div>
        {auth.user !== "" ? <h2>Welcome {auth.user}</h2> : <h2>Please login...</h2>}
        <div>
          <button onClick={() => dispatch({type: "login", payload: "Mesto"})}>Login</button>
          <button onClick={() => dispatch({type: "logout"})}>Logout</button>
        </div>
    </>
  )
}