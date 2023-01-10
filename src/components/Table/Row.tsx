import Column from './Column'
import TableCSS from './table.module.scss'
import { IColumn, IRow } from '../../models/Table/ITable'
import React from 'react'

interface IRowProps {
  row: IRow
  isHeader?: boolean
}

const Row: React.FunctionComponent<IRowProps> = (props) => {
  const {
    row: { columns, id: rowId },
    isHeader
  } = props
  const { table__row, table__row_header } = TableCSS
  const gridStyleBody = {
    gridTemplateColumns: `repeat(${columns.length}, auto)`
  }
  return (
    <div
      className={`${table__row} ${isHeader ? table__row_header : ''}`}
      style={gridStyleBody}
    >
      {columns.map((column: IColumn, id) => (
        <Column column={column} rowId={rowId} key={id} />
      ))}
    </div>
  )
}

export default Row
