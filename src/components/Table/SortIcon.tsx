import { useEffect, useState } from 'react'
import SortIconCSS from './sortIcon.module.scss'
import { useContext } from 'react'
import { Context } from '../../index'
import { ISort, sort } from '../../models/Table/ITable'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

function SortIcon(props: { sort: ISort; type: string }): JSX.Element {
  const { sort, type } = props
  // const [sortBy, setSortBy] = useState<sort>('def')
  // const [sortClass, setSortClass] = useState<string>('')
  const { sortIcon, sortIcon_byDec, sortIcon_byInc, line } = SortIconCSS

  const {
    store: { tablesStore }
  } = useContext(Context)
  let sortClass: string
  if (sort.sortBy === 'def') {
    sortClass = ''
  } else if (sort.sortBy === 'dec') {
    sortClass = sortIcon_byDec
  } else {
    sortClass = sortIcon_byInc
  }

  return (
    <div
      className={`${sortIcon} ${sortClass}`}
      onClick={() => {
        tablesStore.changeSortClass(sort, type)
        tablesStore.sort(sort, type)
      }}
    >
      <span className={line}></span>
      <span className={line}></span>
      <span className={line}></span>
    </div>
  )
}

export default observer(SortIcon)
