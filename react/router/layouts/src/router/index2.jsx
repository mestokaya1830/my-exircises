import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import RouteGuard from '../components/routeGuard.jsx'

//client
import DefaultLayout from '../layouts/default.jsx'
import Home from '../views/client/index.jsx'
const About  = React.lazy(() => import('../views/client/about.jsx'))
const Contact  = React.lazy(() => import('../views/client/contact.jsx'))

//admin
import AdminLayout from '../layouts/admin.jsx'
const Dashboard  = React.lazy(() => import('../views/admin/index.jsx'))
const Details  = React.lazy(() => import('../views/admin/details.jsx'))

//global
const NotFound  = React.lazy(() => import('../views/not-found.jsx'))

export default function index2() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<React.Suspense fallback="Loading..."><About /></React.Suspense>} />
            <Route path='/contact' element={<React.Suspense fallback="Loading..."><Contact /></React.Suspense>} />
        </Route>
        <Route element={<RouteGuard />}>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<React.Suspense fallback="Loading..."><Dashboard /></React.Suspense>} />
            <Route path='/admin/user/:id' element={<React.Suspense fallback="Loading..."><Details /></React.Suspense>} />
          </Route>
        </Route>
        <Route path='*' element={<React.Suspense fallback="Loading..."><NotFound /></React.Suspense>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
