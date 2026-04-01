import { useParams, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function Details() {
  const navigate = useNavigate()

  const {id} = useParams()
  return (
    <>
    <Helmet>
      <title>User Details</title>
      <meta name="description" content="User Details content" />
      <meta name="keywords" content="react, meta tags, seo" />
      <meta name="author" content="Your Name" />
    </Helmet>
      <h2>User Details</h2>
      <h1>{id}</h1>
      <button onClick={() => navigate('/admin/users')}>Back</button>
    </>
  )
}
