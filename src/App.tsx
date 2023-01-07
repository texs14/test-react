import './App.css'
import { observer } from 'mobx-react-lite'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './components/User'
import React, { useContext, useEffect, useState } from 'react'
import TablesPage from './pages/TablesPage'
import { Context } from './index'

function App() {
  const [loader, setLoader] = useState<boolean>(true)
  const {
    store: { tablesStore }
  } = useContext(Context)

  useEffect(() => {
    ;(async () => {
      try {
        await tablesStore.fetchTable()
      } catch (e) {
        console.log(e)
      } finally {
        setLoader(false)
      }
    })()
  }, [])

  if (loader) {
    return <span>Loader </span>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TablesPage />} />
        <Route path='user'>
          <Route index path=':id' element={<User userData={'test'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default observer(App)
