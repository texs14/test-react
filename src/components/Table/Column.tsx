import TableCSS from './table.module.scss'
import SortIcon from './SortIcon'
import { IColumn } from '../../models/Table/ITable'
import React from 'react'
import { Link } from 'react-router-dom'

interface IColumnProps {
  column: IColumn
  rowId: number
}

const Column: React.FunctionComponent<IColumnProps> = (props) => {
  const {
    column: { value, type, sort },
    rowId
  } = props

  const { table__column } = TableCSS
  const correctClasses: string = `${table__column} ${
    TableCSS[`table__column_type_${type}`] || ''
  }`

  return (
    <span className={correctClasses}>
      {type === 'name' && rowId !== 0 ? (
        <Link to={`/user/${rowId}`}>{value}</Link>
      ) : (
        <span>{value}</span>
      )}
      {sort && <SortIcon sort={sort} type={type} />}
    </span>
  )
}

export default Column
