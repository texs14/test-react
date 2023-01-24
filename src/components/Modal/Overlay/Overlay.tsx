import React, { useEffect, useContext } from 'react'
import { Context } from 'index'
import OverlayCSS from './overlay.module.scss'

interface IOverlayProps {
  classes?: string
  children?: React.ReactNode
}

const Overlay: React.FunctionComponent<IOverlayProps> = (props) => {
  const { overlay } = OverlayCSS
  const {
    store: { main }
  } = useContext(Context)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  })

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as Element).className === overlay) {
      main.toggleModal()
    }
  }

  return (
    <div className={overlay} onClick={handleClick}>
      {props.children}
    </div>
  )
}

export default Overlay
