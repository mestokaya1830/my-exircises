import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '../layouts/defaut.jsx'
import Home from '../views/index.jsx'

const Inline = React.lazy(() => import('../views/inline.jsx'))
const Method = React.lazy(() => import('../views/method.jsx'))
const RestMethod = React.lazy(() => import('../views/restmethod.jsx'))
const Refs = React.lazy(() => import('../views/refs.jsx'))
const Checkbox = React.lazy(() => import('../views/checkbox.jsx'))
const Radio = React.lazy(() => import('../views/radio.jsx'))
const Select = React.lazy(() => import('../views/select.jsx'))
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
          path: '/inline',
          element: <React.Suspense fallback="Loading..."><Inline /></React.Suspense>
        },
        {
          path: '/method',
          element: <React.Suspense fallback="Loading..."><Method /></React.Suspense>
        },
        {
          path: '/rest-method',
          element: <React.Suspense fallback="Loading..."><RestMethod /></React.Suspense>
        },
        {
          path: '/refs',
          element: <React.Suspense fallback="Loading..."><Refs /></React.Suspense>
        },
        {
          path: '/checkbox',
          element: <React.Suspense fallback="Loading..."><Checkbox /></React.Suspense>
        },
        {
          path: '/radio',
          element: <React.Suspense fallback="Loading..."><Radio /></React.Suspense>
        },
        {
          path: '/select',
          element: <React.Suspense fallback="Loading..."><Select /></React.Suspense>
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
