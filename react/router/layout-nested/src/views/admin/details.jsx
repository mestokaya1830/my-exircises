import { useParams, useNavigate } from "react-router-dom"

export default function Details() {
  const navigate = useNavigate()

  const {id} = useParams()
  return (
    <>
      <h2>User Details</h2>
      <h1>{id}</h1>
      <button onClick={() => navigate('/admin')}>Back</button>
    </>
  )
}
