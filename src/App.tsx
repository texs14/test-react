import './App.css'
import { observer } from 'mobx-react-lite'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'

const App: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const redirectArr = ['/', '/table', '/table/']

  useEffect(() => {
    if (redirectArr.find((i) => i === location.pathname)) {
      navigate('/table/contributors')
    }
  }, [])

  return (
    <>
      <main className='main'>
        <Outlet />
      </main>
    </>
  )
}

export default observer(App)
