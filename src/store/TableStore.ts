import { makeAutoObservable } from 'mobx'
import { ITable, IRow, sort, IColumn, ISort } from '../models/Table/ITable'
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

  async fetchTable() {
    const promise: Promise<ITable> = new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve({
            header: {
              id: 0,
              columns: [
                {
                  value: 'Id',
                  type: 'id',
                  sort: {
                    sortBy: 'def',
                    isSort: false
                  }
                },
                {
                  value: 'ФИО',
                  type: 'name',
                  sort: {
                    sortBy: 'def',
                    isSort: false
                  }
                },
                {
                  value: 'Сумма вложений',
                  type: 'value',
                  sort: {
                    sortBy: 'def',
                    isSort: false
                  }
                },
                {
                  value: 'Количество акций',
                  type: 'valueA',
                  sort: {
                    sortBy: 'def',
                    isSort: false
                  }
                },
                {
                  value: 'Текущий денежный эквивалент',
                  type: 'many',
                  sort: {
                    sortBy: 'def',
                    isSort: false
                  }
                },
                {
                  value: 'Прибыль',
                  type: 'profit',
                  sort: {
                    sortBy: 'def',
                    isSort: false
                  }
                },
                {
                  value: 'Операции на Счёте вкладчика',
                  type: 'operation'
                }
              ]
            },
            rows: [
              {
                id: 11,
                columns: [
                  { value: '1', type: 'id' },
                  { value: 'БАИванов Иван Иванович', type: 'name' },
                  { value: '100003', type: 'value' },
                  { value: '1002', type: 'valueA' },
                  { value: '100001', type: 'many' },
                  { value: '1', type: 'profit' },
                  { value: '???', type: 'operation' }
                ]
              },
              {
                id: 22,
                columns: [
                  { value: '2', type: 'id' },
                  { value: 'АИванов Иван Иванович', type: 'name' },
                  { value: '100002', type: 'value' },
                  { value: '1002', type: 'valueA' },
                  { value: '100002', type: 'many' },
                  { value: '2', type: 'profit' },
                  { value: '???', type: 'operation' }
                ]
              },
              {
                id: 33,
                columns: [
                  { value: '4', type: 'id' },
                  { value: 'ГИванов Иван Иванович', type: 'name' },
                  { value: '100004', type: 'value' },
                  { value: '1004', type: 'valueA' },
                  { value: '100004', type: 'many' },
                  { value: '4', type: 'profit' },
                  { value: '???', type: 'operation' }
                ]
              },
              {
                id: 44,
                columns: [
                  { value: '3', type: 'id' },
                  { value: 'ВИванов ИванИванИван Иванович', type: 'name' },
                  { value: '100003', type: 'value' },
                  { value: '1003', type: 'valueA' },
                  { value: '100003', type: 'many' },
                  { value: '3', type: 'profit' },
                  { value: '???', type: 'operation' }
                ]
              }
            ]
          })
        }, 1000)
      } catch (e) {
        reject(e)
      }
    })
    await promise
      .then((data) => {
        this.table = data
      })
      .catch((e) => {
        console.log(e)
      })
    this.sortedRows = this.table.rows
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
