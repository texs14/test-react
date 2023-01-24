import {
  collection,
  onSnapshot,
  addDoc,
  CollectionReference
} from 'firebase/firestore'
import db from 'http/firebase-config'

import 'assets/style/components/pagination.scss'

import TableCSS from './table.module.scss'
import Row from './Row'
import { ITable, IRow } from 'models/Table/ITable'
import {
  HEADER_BORROWERS,
  TYPES_BORROWERS_ARR,
  TYPES_CONTRIBUTORS_ARR,
  HEADER_CONTRIBUTORS
} from './TablesConst'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import TableService from 'services/TableService'

import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from 'index'
import ReactPaginate from 'react-paginate'

interface ITableProps {
  table?: ITable
  sortRows?: IRow[]
  itemsOnPage?: number
}

const Table: React.FunctionComponent<ITableProps> = (props) => {
  const [loader, setLoader] = useState(true)
  const [selected, setSelected] = useState(0)

  const { itemsOnPage = 3 } = props

  const {
    store: { tablesStore }
  } = useContext(Context)

  const { table, sortedRows } = tablesStore

  const location = useLocation()
  let regexLocation = new RegExp(location.pathname)
  // В БД напутал вкладчиков и заёмщиков поэтому
  // тут их надо будет поменять местами
  let header: IRow
  let typesArr: string[]
  let contributorsCollectionRef: CollectionReference

  if (regexLocation.test('/table/contributors')) {
    header = HEADER_BORROWERS
    typesArr = TYPES_BORROWERS_ARR
    contributorsCollectionRef = collection(db, 'contributors')
  } else {
    header = HEADER_CONTRIBUTORS
    typesArr = TYPES_CONTRIBUTORS_ARR
    contributorsCollectionRef = collection(db, 'borrowers')
  }

  const addUser = async () => {
    // const addData = {
    //   id: `${Math.random()}`,
    //   name: 'Набиулина Эльвира Сахипзадовна',
    //   value: 100000,
    //   numberShares: 1000,
    //   many: 110000,
    //   profit: 10000,
    //   operation: []
    // }
    // const addData = {
    //   id: `${Math.random()}`,
    //   name: 'Sberbank',
    //   indebtedness: 100000,
    //   overpayment: 25000,
    //   payments: 10000,
    //   percentages: 25
    // }
    // await addDoc(contributorsCollectionRef, addData)
    console.log('add')
  }

  useEffect(() => {
    setLoader(true)
    ;(async () => {
      // Переделать preloader в finally после избавления от onSnapshot

      try {
        let completedTable: ITable
        onSnapshot(contributorsCollectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => {
            return { ...doc.data() }
          })
          console.log('data', data)
          completedTable = TableService.createTable(data, header, typesArr)
          tablesStore.setTable(completedTable)
          setLoader(false)
        })
      } catch (e) {
        console.log(e)
        setLoader(false)
      }
    })()
    setSelected(0)
  }, [location])

  if (loader) {
    return <span>Load...</span>
  }

  return (
    <div className={TableCSS.table}>
      <Row row={table.header} isHeader={true} />
      {sortedRows
        .slice(selected * itemsOnPage, selected * itemsOnPage + itemsOnPage)
        // В БД мусор, потом убрать проверку
        .map((row) => row && <Row row={row} key={row.id} />)}
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
