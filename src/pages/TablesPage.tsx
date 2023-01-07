import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

import Table from '../components/Table/Table'
import User from '../components/User'

interface ITablesPageProps {}

const TablesPage: React.FunctionComponent<ITablesPageProps> = () => {
  const {
    store: { tablesStore }
  } = useContext(Context)

  return (
    <div className='TablesPage'>
      <Table
        table={tablesStore.getTables}
        sortRows={tablesStore.getSortedRows}
      />
    </div>
  )
}

export default observer(TablesPage)
