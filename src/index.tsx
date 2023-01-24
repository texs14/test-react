import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Store, { store } from './store/store'
import { RouterProvider } from 'react-router-dom'

import router from './router/router'
import { log } from 'util'

interface State {
  store: Store
}

export const Context = createContext<State>({
  store
})
console.log('store', store)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <RouterProvider router={router} />
    </Context.Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
