import { setAuth } from '../store/authSlice.jsx'
import { useSelector, useDispatch } from 'react-redux'

export default function Index() {
  const auth = useSelector(state => state.auth.value)
  const dispatch = useDispatch()

  const logout = () => {
    if(JSON.parse(localStorage.getItem('persist:root'))){
      localStorage.removeItem('persist:root')
    }
    dispatch(setAuth(""))
  }
  return (
    <>
      <h1>Home</h1>
      {auth === "" ? <h2>Please login...</h2> : <h2>Welcome {auth}</h2>}
      <button onClick={() => dispatch(setAuth("mestokaya"))}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  )
}