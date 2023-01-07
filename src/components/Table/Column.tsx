import TableCSS from './table.module.scss'
import SortIcon from './SortIcon'
import { IColumn } from '../../models/Table/ITable'
// import { useContext } from 'react'
// import { Context } from '../../index'

function Column(props: { column: IColumn; rowId: number }) {
  const {
    column: { value, type, sort },
    rowId
  } = props

  // const {
  //   store: {
  //     tablesStore: {}
  //   }
  // } = useContext(Context)
  const { table__column } = TableCSS
  const correctClasses: string = `${table__column} ${
    TableCSS[`table__column_type_${type}`] || ''
  }`

  return (
    <span className={correctClasses}>
      {type === 'name' && rowId !== 0 ? (
        <a href={`/user/${rowId}`}>{value}</a>
      ) : (
        <span>{value}</span>
      )}
      {sort && <SortIcon sort={sort} type={type} />}
    </span>
  )
}

export default Column
