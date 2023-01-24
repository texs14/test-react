import { IRow, ITable } from 'models/Table/ITable'

class TableService {
  createTable(data: any, header: IRow, typesArr: string[]): ITable {
    let tableHeaderC = header
    let tableRowsC: IRow[] = data.map((item: any) => {
      let row: any = {}
      row.id = `${Math.random() * 10}`
      if (item.name) {
        row.columns = typesArr.map((type: string) => {
          return {
            type: type,
            value: item[type]
          }
        })
        return row
      } else {
        return null
      }
    })

    const table: ITable = {
      header: tableHeaderC,
      rows: tableRowsC
    }

    return table
  }
}

export default new TableService()
