import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteGuard from '../components/routeGuard.jsx'
//client
import DefaultLayout from '../layouts/default.jsx'
import Home from '../views/client/index.jsx'
const About  = React.lazy(() => import('../views/client/about.jsx'))
const Contact  = React.lazy(() => import('../views/client/contact.jsx'))

//admin
import AdminLayout from '../layouts/admin.jsx'
const Dashboard  = React.lazy(() => import('../views/admin/index.jsx'))
const Users  = React.lazy(() => import('../views/admin/users.jsx'))
const Details  = React.lazy(() => import('../views/admin/details.jsx'))

//global
const NotFound  = React.lazy(() => import('../views/not-found.jsx'))

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
          path:'/about',
          element: <React.Suspense fallback="Loading..."><About /></React.Suspense>
        },
        {
          path:'/contact',
          element: <React.Suspense fallback="Loading..."><Contact /></React.Suspense>
        },
        {
          path: '/admin',
          element: <RouteGuard><AdminLayout /></RouteGuard>,
          children:[
            {
              path:'/admin',
              element: <React.Suspense fallback="Loading..."><Dashboard /></React.Suspense>
            },
            {
              path:'/admin/users',
              element: <React.Suspense fallback="Loading..."><Users /></React.Suspense>
            },
            {
              path:'/admin/user/:id',
              element: <React.Suspense fallback="Loading..."><Details /></React.Suspense>
            }
          ]
    
        },
      ]
    },
    {
      path:'*',
      element: <React.Suspense fallback="Loading..."><NotFound /></React.Suspense>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
