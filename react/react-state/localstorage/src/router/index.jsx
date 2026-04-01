import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '../layouts/defaut.jsx'
import Home from '../views/index.jsx'
import Admin from '../views/admin.jsx'

const Login = React.lazy(() => import('../views/login.jsx'))
const Notfound = React.lazy(() => import('../views/notfound.jsx'))

export default function Index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path:'/admin',
          element: <React.Suspense fallback="Loading..."><Admin /></React.Suspense>
        },
        {
          path:'/login',
          element: <React.Suspense fallback="Loading..."><Login /></React.Suspense>
        }
      ]
    },
    {
      path:'*',
      element: <React.Suspense fallback="Loading..."><Notfound /></React.Suspense>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
