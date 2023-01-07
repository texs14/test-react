import Store from './store'
import { makeAutoObservable, toJS } from 'mobx'
import { IRow } from '../models/Table/ITable'

class UserStore {
  rootState: Store
  constructor(rootState: Store) {
    makeAutoObservable(this)
    this.rootState = rootState
  }

  getUser(id: number): any {
    console.log('tyt', toJS(this.rootState))
    if (this.rootState.tablesStore.table.rows) {
      const currentUser = this.rootState.tablesStore.table.rows.find((row) => {
        return row.id === id
      })

      if (currentUser) {
        currentUser.columns.forEach((column) => {
          console.log('column', toJS(column))
        })
      }
    }
  }
}

export default UserStore
