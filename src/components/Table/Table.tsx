import TableCSS from './table.module.scss'
import Row from './Row'
import { IColumn, ITable, IRow } from '../../models/Table/ITable'
import { observer } from 'mobx-react-lite'

function Table(props: { table: ITable; sortRows: IRow[] }): JSX.Element {
  const { table, sortRows } = props

  return (
    <div className={TableCSS.table}>
      <Row row={table.header} isHeader={true} />
      {sortRows.map((row) => (
        <Row row={row} key={row.id} />
      ))}
    </div>
  )
}

export default observer(Table)
