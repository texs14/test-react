export type sort = 'def' | 'dec' | 'inc'

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
  id: number
  columns: IColumn[]
}

export interface ITable {
  header: IRow
  rows: IRow[]
}
