import { setAuth } from '../store/authSlice.jsx'
import { useSelector, useDispatch } from 'react-redux'

export default function Index() {
  const auth = useSelector(state => state.auth.value)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Home</h1>
      {auth ? <h2>Welcome {auth}</h2> : <h2>Please login!</h2>}
      <button onClick={() => dispatch(setAuth("mestokaya"))}>login</button>
      <button onClick={() => dispatch(setAuth(""))}>logout</button>
    </>
  )
}