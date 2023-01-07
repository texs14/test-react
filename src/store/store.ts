import TableStore from './TableStore'
import UserStore from './UserStore'
import { makeAutoObservable } from 'mobx'

export default class Store {
  tablesStore: TableStore
  user: UserStore

  constructor() {
    makeAutoObservable(this)
    this.tablesStore = new TableStore(this)
    this.user = new UserStore(this)
  }
}
