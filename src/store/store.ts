import TableStore from './TableStore'
import UserStore from './UserStore'
import { makeAutoObservable } from 'mobx'
import MainStore from './MainStore'

export default class Store {
  tablesStore: TableStore
  user: UserStore
  main: MainStore

  constructor() {
    makeAutoObservable(this)
    this.tablesStore = new TableStore(this)
    this.user = new UserStore(this)
    this.main = new MainStore(this)
  }
}

const store = new Store()

export { store }
