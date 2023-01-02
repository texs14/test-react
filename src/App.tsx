import './App.css'
import { useContext, useEffect, useState } from 'react'
import { Context } from './index'
import { observer } from 'mobx-react-lite'

function App() {
  const {
    store: { counter, color }
  } = useContext(Context)
  return (
    <div className='App'>
      <span style={{ background: color.color }}>Count: {counter.count}</span>
      <br />
      <button onClick={() => counter.inc()}>+</button>
      <button onClick={() => counter.dec()}>-</button>
      <button onClick={() => color.changeColor()}>Change color</button>
    </div>
  )
}

export default observer(App)
