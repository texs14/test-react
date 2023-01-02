import { makeAutoObservable } from 'mobx'
import Store from './store'

class CounterStore {
  count: number = 0
  store: Store
  constructor(rootStore: Store) {
    this.store = rootStore
    makeAutoObservable(this)
  }

  getCount() {
    return this.count
  }

  inc() {
    this.count += 1
  }

  dec() {
    this.count -= 1
  }
}

export default CounterStore
