import { setAuth } from '../store/authSlice.jsx'
import { useSelector, useDispatch } from 'react-redux'

export default function Admin() {
  const auth = useSelector(state => state.auth.value)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Home</h1>
      {auth ? <h2>Welcome</h2> : <h2>Please login!</h2>}
      <button onClick={() => dispatch(setAuth(true))}>Set Auth</button>
    </>
  )
}