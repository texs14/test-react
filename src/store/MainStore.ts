import { makeAutoObservable } from 'mobx'
import Store from './store'

class MainStore {
  modalIsOpen: boolean
  constructor(rootState: Store) {
    makeAutoObservable(this)
    this.modalIsOpen = false
  }

  toggleModal() {
    this.modalIsOpen = !this.modalIsOpen
  }
}

export default MainStore
