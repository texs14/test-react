import './App.css'
import { observer } from 'mobx-react-lite'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router-dom'
import User from './components/User'
import React, { useContext, useEffect, useState } from 'react'
import TablesPage from './pages/TablesPage/TablesPage'
import { Context } from './index'

const App: React.FunctionComponent = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const {
    store: { tablesStore }
  } = useContext(Context)

  let location = useLocation()

  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       await tablesStore.fetchTable('contributors')
  //     } catch (e) {
  //       console.log(e)
  //     } finally {
  //       setLoader(false)
  //     }
  //   })()
  // }, [])

  if (loader) {
    return <span>Loader </span>
  }

  return (
    <main className='main'>
      <Routes>
        <Route path='table' element={<TablesPage />}>
          <Route path='contributors' element={<TablesPage />} />
          <Route path='borrowers' element={<TablesPage />} />
        </Route>
        <Route path='user'>
          <Route index path=':id' element={<User />} />
        </Route>
        {/*<Route path='*' element={<Navigate to='table' replace />} />*/}
        <Route
          path='*'
          element={<Navigate to='table/contributors' replace />}
        />
      </Routes>
    </main>
  )
}

export default observer(App)
