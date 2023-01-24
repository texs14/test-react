import React, { useContext } from 'react'
import Overlay from 'components/Modal/Overlay/Overlay'
import { observer } from 'mobx-react-lite'

import ModalCSS from './modal.module.scss'
import { Context } from 'index'

interface IModalProps {
  children?: React.ReactNode
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  const { modal, modal__close } = ModalCSS
  const {
    store: { main }
  } = useContext(Context)

  return (
    <Overlay>
      <div className={modal}>
        <span
          className={modal__close}
          onClick={() => main.toggleModal()}
        ></span>
        {props.children}
      </div>
    </Overlay>
  )
}

export default observer(Modal)
