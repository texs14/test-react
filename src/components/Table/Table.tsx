import 'assets/style/components/pagination.scss'

import TableCSS from './table.module.scss'
import Row from './Row'
import { ITable, IRow } from 'models/Table/ITable'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import TableService from 'services/TableService'

import {
  useLoaderData,
  LoaderFunctionArgs,
  useLocation
} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from 'index'
import Pagination from './Pagination/Pagination'
import ReactPaginate from 'react-paginate'

export const tableLoader = async ({ params }: LoaderFunctionArgs) => {
  if (params.type === 'contributors' || params.type === 'borrowers') {
    const data = TableService.fetchTable(params.type)
    return data
  }
}

interface ITableProps {
  table?: ITable
  sortRows?: IRow[]
  itemsOnPage?: number
}

const Table: React.FunctionComponent<ITableProps> = (props) => {
  const [loader, setLoader] = useState(true)
  const [showRows, setShowRows] = useState([] as IRow[])
  const [selected, setSelected] = useState(0)

  const { itemsOnPage = 3 } = props

  const {
    store: { tablesStore }
  } = useContext(Context)

  const { table, sortedRows } = tablesStore

  const changePage = (selected: number) => {
    setShowRows(
      sortedRows.slice(
        selected * itemsOnPage,
        selected * itemsOnPage + itemsOnPage
      )
    )
  }

  const location = useLocation()
  let regexLocation = new RegExp(location.pathname)

  useEffect(() => {
    setLoader(true)
    if (regexLocation.test('/table/contributors')) {
      ;(async () => {
        try {
          await tablesStore.fetchTable('contributors')
          changePage(0)
        } catch (e) {
          console.log(e)
        } finally {
          setLoader(false)
        }
      })()
    } else if (regexLocation.test('/table/borrowers')) {
      ;(async () => {
        try {
          await tablesStore.fetchTable('borrowers')
          changePage(0)
        } catch (e) {
          console.log(e)
        } finally {
          setLoader(false)
        }
      })()
    }
  }, [location])

  if (loader) {
    return <span>Load...</span>
  }

  return (
    <div className={TableCSS.table}>
      <Row row={table.header} isHeader={true} />
      {sortedRows
        .slice(selected * itemsOnPage, selected * itemsOnPage + itemsOnPage)
        .map((row) => (
          <Row row={row} key={row.id} />
        ))}
      <ReactPaginate
        previousLabel='Previous'
        nextLabel='Next'
        previousClassName='pagination__item_hidden'
        previousLinkClassName='pagination__link'
        nextClassName='pagination__item_hidden'
        nextLinkClassName='pagination__link'
        pageLinkClassName='pagination__link'
        pageClassName='pagination__item'
        breakLabel='...'
        breakClassName='pagination__item'
        breakLinkClassName='pagination__link'
        pageCount={sortedRows.length / itemsOnPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={({ selected }) => setSelected(selected)}
        containerClassName='pagination table-page__pagination '
        activeClassName='pagination__item_active'
      />
    </div>
  )
}

export default observer(Table)

// Загрузка через react-router-dom

// const [table, setTable] = useState({} as ITable)
// const [sortRows, setSortRows] = useState([] as IRow[])

// let data = useLoaderData() as ITable
//
// let table
// let sortRows

// console.log('table', table)
// console.log('sortRows', sortRows)
// if (props.table && props.sortRows) {
//   table = props.table
//   sortRows = props.sortRows
// } else {
//   console.log('sortRows', data.rows)
//
//   table = data
//   sortRows = [...data.rows]
// }

// useEffect(() => {
// if (props.table && props.sortRows) {
//   setTable(props.table)
//   setSortRows(props.sortRows)
// } else {
//   console.log('sortRows', data.rows)
//
//   setTable(data)
//   setSortRows([...data.rows])
// }
//   setLoader(false)
// }, [])
