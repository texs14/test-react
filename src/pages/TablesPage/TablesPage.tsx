import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import NavTabs from 'components/NavTabs/NavTabs'
import { Outlet } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import TablesPageStyle from './tablesPage.module.scss'
import './tablePage.scss'
import AddUserModal from '../../components/Modal/kindaModals/AddUserModal/AddUserModal'
import { Context } from 'index'
import { toJS } from 'mobx'

interface ITablesPageProps {}

const { tablesPage } = TablesPageStyle

const TablesPage: React.FunctionComponent<ITablesPageProps> = () => {
  const {
    store: { main }
  } = useContext(Context)

  const location = useLocation()

  const links = [
    { linkName: 'Вкладчики', path: 'contributors' },
    { linkName: 'Заёмщики', path: 'borrowers' }
  ]

  return (
    <>
      {main.modalIsOpen && (
        <AddUserModal
          typesUser={
            /contributors/.test(location.pathname)
              ? 'contributors'
              : 'borrowers'
          }
        />
      )}
      <div className={`${tablesPage} table-page`}>
        <NavTabs links={links} />
        <button onClick={() => main.toggleModal()}>add</button>
        <Outlet />
      </div>
    </>
  )
}

export default observer(TablesPage)
