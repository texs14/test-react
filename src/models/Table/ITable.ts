export type sort = 'def' | 'dec' | 'inc'
export type tableType = 'contributors' | 'borrowers'

export interface ISort {
  isSort: boolean
  sortBy: sort
}

export interface IColumn {
  value: string
  type: string
  sort?: ISort
}

// export interface IColumnHeader extends IColumn {
//    | boolean
// }

export interface IRow {
  id: string
  columns: IColumn[]
}

export interface ITable {
  header: IRow
  rows: IRow[]
}
