import { useSelector } from 'react-redux'

export default function Admin() {
  const auth = useSelector(state => state.auth.value)

  return (
    <>
      <h1>Home</h1>
      {auth === "" ? <h2>Please login...</h2> : <h2>Welcome {auth}</h2>}
    </>
  )
}