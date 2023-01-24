import { makeAutoObservable } from 'mobx'
import { ITable, IRow, tableType, IColumn, ISort } from 'models/Table/ITable'
import Store from './store'
import { toJS } from 'mobx'

class TableStore {
  table: ITable
  sortedRows: IRow[]

  constructor(rootState: Store) {
    makeAutoObservable(this)
    this.table = {} as ITable
    this.sortedRows = [] as IRow[]
  }

  get getTables() {
    return this.table
  }

  get getSortedRows() {
    return this.sortedRows
  }

  setTable(table: ITable) {
    this.table = table
    this.sortedRows = table.rows
  }

  cleanIsSort(columns: IColumn[]) {
    columns.forEach((column) => {
      if (column.sort instanceof Object) {
        column.sort.isSort = false
      }
    })
  }

  cleanSortBy(columns: IColumn[]) {
    columns.forEach((column) => {
      if (column.sort instanceof Object && column.sort.isSort === false) {
        column.sort.sortBy = 'def'
      }
    })
  }

  changeSortClass(sort: ISort, type: string) {
    this.cleanIsSort(this.table.header.columns)
    if (sort instanceof Object) {
      sort.isSort = true
      if (sort.sortBy === 'def') {
        sort.sortBy = 'dec'
      } else if (sort?.sortBy === 'dec') {
        sort.sortBy = 'inc'
      } else {
        sort.sortBy = 'def'
      }
    }
    this.cleanSortBy(this.table.header.columns)
  }

  sort(sort: ISort, type: string) {
    const defArr: IRow[] = [...this.table.rows]
    if (sort.sortBy === 'def') {
      this.sortedRows = defArr
    } else {
      this.sortedRows = defArr.sort((a, b) => {
        const valA = a.columns.find((i) => {
          return i.type === type
        })

        const valB = b.columns.find((i) => {
          return i.type === type
        })

        if (valA && valB) {
          if (sort.sortBy === 'dec') {
            return valA.value > valB.value ? -1 : 1
          } else {
            return valA.value > valB.value ? 1 : -1
          }
        }

        return 0
      })
    }
  }
}

export default TableStore
