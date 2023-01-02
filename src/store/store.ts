import CounterStore from './CounterStore'
import ChangeColorStore from './ChengeColorStore'

export default class Store {
  counter: CounterStore
  color: ChangeColorStore

  constructor() {
    this.counter = new CounterStore(this)
    this.color = new ChangeColorStore(this)
  }
}
