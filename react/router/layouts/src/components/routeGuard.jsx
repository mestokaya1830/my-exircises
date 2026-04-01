import { Navigate } from "react-router-dom"
import AdminLayout from '../layouts/admin.jsx'

export default function RouteGuard() {
 const user = 'mesto'
 return (
  <div className="router">
    {user ? <AdminLayout /> : <Navigate to="/" />}
  </div>
 )
}

//or
// import { Navigate } from "react-router-dom"
// export default function RouteGuard({ children }) {
//  const user = null
//  if(user){
//   return (
//     <div className="router">{children}</div>
//   )
//  }
//  return <Navigate to="/" />
// }
