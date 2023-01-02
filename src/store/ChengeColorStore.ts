import { makeAutoObservable } from 'mobx'
import Store from './store'

class ChangeColorStore {
  color: 'blue' | 'red'
  constructor(rootStore: Store) {
    makeAutoObservable(this)
    this.color = 'red'
  }

  changeColor() {
    if (this.color === 'red') {
      this.color = 'blue'
    } else {
      this.color = 'red'
    }
  }
}

export default ChangeColorStore
