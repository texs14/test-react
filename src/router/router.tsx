import { createBrowserRouter } from 'react-router-dom'

import TablesPage from 'pages/TablesPage/TablesPage'
import ErrorPage from 'pages/ErrorPage/ErrorPage'
import User from 'components/User'
import Table from 'components/Table/Table'
import App from 'App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'table',
        children: [
          {
            path: ':type',
            // loader: tableLoader,
            element: <Table />
          }
        ],
        element: <TablesPage />
      },
      {
        path: 'user/:id',
        element: <User />
      }
    ]
  }
])

export default router
