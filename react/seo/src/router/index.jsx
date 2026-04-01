import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DefaultLayout from '@/layouts/default.jsx'
import Home from '@/views/home.jsx'

const About = React.lazy(() => import("@/views/about"))
const Contact = React.lazy(() => import("@/views/contact"))
const Notfound = React.lazy(() => import("@/views/notfound"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <React.Suspense fallback="Loading..."><About /></React.Suspense>
      },
      {
        path: '/contact',
        element: <React.Suspense fallback="Loading..."><Contact /></React.Suspense>
      },
      {
        path: '*',
        element: <React.Suspense fallback="Loading..."><Notfound /></React.Suspense>
      }
    ]
  }
])
export default function Index() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
