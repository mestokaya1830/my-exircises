import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//layouts
import DefaultLayout from '../layouts/default.jsx'
import Home from '../views/index.jsx'

const Admin = React.lazy(() => import('../views/admin.jsx'))
const NotFound = React.lazy(() => import('../views/notfound.jsx'))

export default function index() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <DefaultLayout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/admin',
          element: <React.Suspense fallback="Loading..."><Admin /></React.Suspense>
        }
      ]
    },
    {
      path: '*',
      element: <React.Suspense fallback="Loading..."><NotFound /></React.Suspense>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
