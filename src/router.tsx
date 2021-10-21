import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { PartialRouteObject } from 'react-router'

import SidebarLayout from 'src/layouts/SidebarLayout'
import BaseLayout from 'src/layouts/BaseLayout'

import SuspenseLoader from 'src/components/SuspenseLoader'

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
)

// Login
const Login = Loader(lazy(() => import('src/content/auth/Login')))
// Forgot Password
const Forgot = Loader(lazy(() => import('src/content/auth/Forgot')))
// Reset Password
const Reset = Loader(lazy(() => import('src/content/auth/Reset')))

// Dashboards

const Dashboards = Loader(lazy(() => import('src/content/dashboards')))

// Applications

//const Transactions = Loader(lazy(() => import('src/content/applications/Transactions')));
const ListCase = Loader(
  lazy(() => import('src/content/applications/Cases/List')),
)
const CreateCase = Loader(
  lazy(() => import('src/content/applications/Cases/Create')),
)
const EditCase = Loader(
  lazy(() => import('src/content/applications/Cases/Edit')),
)

// Status

const Status404 = Loader(lazy(() => import('src/content/pages/Status404')))

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgot',
        element: <Forgot />,
      },
      {
        path: 'reset',
        element: <Reset />,
      },
      {
        path: 'status',
        children: [
          {
            path: '/',
            element: <Navigate to="404" replace />,
          },
          {
            path: '404',
            element: <Status404 />,
          },
        ],
      },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
  {
    path: 'bm',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/bm/dashboards" replace />,
      },
      {
        path: 'dashboards',
        element: <Dashboards />,
      },
    ],
  },
  {
    path: 'bm',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/bm/cases/list" replace />,
      },
      {
        path: 'cases/list',
        element: <ListCase />,
      },
      {
        path: '/',
        element: <Navigate to="/bm/cases/create" replace />,
      },
      {
        path: 'cases/create',
        element: <CreateCase />,
      },
      {
        path: '/',
        element: <Navigate to="/bm/cases/edit" replace />,
      },
      {
        path: 'cases/edit',
        element: <EditCase />,
      },
      {
        path: 'profile',
        children: [
          {
            path: '/',
            element: <Navigate to="details" replace />,
          },
        ],
      },
    ],
  },
]

export default routes
