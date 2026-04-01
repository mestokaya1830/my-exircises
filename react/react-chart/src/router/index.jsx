import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DefaulLayout from '../layouts/index.jsx'
import Line from '../views/line.jsx'
import Bar from '../views/bar.jsx'
import Pie from '../views/pie.jsx'

const Notfound  = React.lazy(() => import('../views/notfound.jsx'))

export default function Index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaulLayout />,
      children: [
        {
          path: '/',
          element: <Line />
        },
        {
          path: '/bar',
          element: <React.Suspense fallback="Loading..."><Bar /></React.Suspense>
        },
        {
          path: '/pie',
          element: <React.Suspense fallback="Loading..."><Pie /></React.Suspense>
        },
        {
          path: '*',
          element: <React.Suspense fallback="Loading..."><Notfound /></React.Suspense>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
