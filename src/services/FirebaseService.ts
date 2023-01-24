import { collection, onSnapshot } from 'firebase/firestore'
import db from 'http/firebase-config'
import { ITable, sort, IColumn } from '../models/Table/ITable'

import TableService from 'services/TableService'

class FirebaseService {
  table: any

  async getTable(collectionName: string) {
    const contributorsCollectionRef = await collection(db, collectionName)
    let completedTable
    onSnapshot(contributorsCollectionRef, (snapshot) => {
      const table = snapshot.docs.map((doc) => {
        return { ...doc.data() }
      })[0]

      // completedTable = TableService.createTable(table)
    })
  }
}

export default new FirebaseService()
