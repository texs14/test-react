import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

import Table from '../../components/Table/Table'
import NavTabs from '../../components/NavTabs/NavTabs'
import { useLocation, useNavigate } from 'react-router-dom'

import TablesPageStyle from './tablesPage.module.scss'

interface ITablesPageProps {}

const { tablesPage } = TablesPageStyle

const TablesPage: React.FunctionComponent<ITablesPageProps> = () => {
  const [loader, setLoader] = useState(true)
  const {
    store: { tablesStore }
  } = useContext(Context)

  const links = [
    { linkName: 'Вкладчики', path: 'contributors' },
    { linkName: 'Заёмщики', path: 'borrowers' }
  ]

  const location = useLocation()
  const navigate = useNavigate()
  let regexLocation = new RegExp(location.pathname)

  useEffect(() => {
    setLoader(true)
    if (regexLocation.test('/table/contributors')) {
      ;(async () => {
        try {
          await tablesStore.fetchTable('contributors')
        } catch (e) {
          console.log(e)
        } finally {
          setLoader(false)
        }
      })()
      console.log(location.pathname)
    } else if (regexLocation.test('/table/borrowers')) {
      ;(async () => {
        try {
          await tablesStore.fetchTable('borrowers')
        } catch (e) {
          console.log(e)
        } finally {
          setLoader(false)
        }
      })()
      console.log(location.pathname)
    }
  }, [location])

  if (regexLocation.test('/table')) {
    navigate('/table/contributors')
  }

  return (
    <div className={tablesPage}>
      <NavTabs links={links} />
      {loader ? (
        <span>Load...</span>
      ) : (
        <Table
          table={tablesStore.getTables}
          sortRows={tablesStore.getSortedRows}
        />
      )}
    </div>
  )
}

export default observer(TablesPage)
