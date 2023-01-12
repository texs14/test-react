import React from 'react'
import { observer } from 'mobx-react-lite'

import NavTabs from 'components/NavTabs/NavTabs'
import { Outlet } from 'react-router-dom'

import TablesPageStyle from './tablesPage.module.scss'
import './tablePage.scss'

interface ITablesPageProps {}

const { tablesPage } = TablesPageStyle

const TablesPage: React.FunctionComponent<ITablesPageProps> = () => {
  const links = [
    { linkName: 'Вкладчики', path: 'contributors' },
    { linkName: 'Заёмщики', path: 'borrowers' }
  ]

  return (
    <div className={`${tablesPage} table-page`}>
      <NavTabs links={links} />
      <Outlet />
    </div>
  )
}

export default observer(TablesPage)
