import Store from './store'
import { makeAutoObservable, toJS } from 'mobx'
import { IColumn, IRow } from 'models/Table/ITable'
import { IUser } from 'models/User/IUser'

class UserStore {
  rootState: Store
  constructor(rootState: Store) {
    makeAutoObservable(this)
    this.rootState = rootState
  }

  getUser(id: number): IUser {
    let userData: any = {}
    if (this.rootState.tablesStore.table.rows) {
      const currentUser = this.rootState.tablesStore.table.rows.find(
        (row: IRow) => {
          return row.id === id
        }
      )

      if (currentUser) {
        currentUser.columns.forEach((column: IColumn) => {
          userData[column.type] = column.value
        })
      }
    }
    return userData
  }
}

export default UserStore
