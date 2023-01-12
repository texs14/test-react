import { ITable, tableType } from 'models/Table/ITable'

class TableService {
  private table: ITable
  constructor() {
    this.table = {} as ITable
  }

  async fetchTable(tableType: tableType) {
    const promise: Promise<ITable> = new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          if (tableType === 'contributors') {
            resolve({
              header: {
                id: 0,
                columns: [
                  {
                    value: 'Id',
                    type: 'id',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'ФИО',
                    type: 'name',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Сумма вложений',
                    type: 'value',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Количество акций',
                    type: 'valueA',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Текущий денежный эквивалент',
                    type: 'many',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Прибыль',
                    type: 'profit',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Операции на Счёте вкладчика',
                    type: 'operation'
                  }
                ]
              },
              rows: [
                {
                  id: 11,
                  columns: [
                    { value: '1', type: 'id' },
                    { value: 'БАИванов Иван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1002', type: 'valueA' },
                    { value: '100001', type: 'many' },
                    { value: '1', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 22,
                  columns: [
                    { value: '2', type: 'id' },
                    { value: 'АИванов Иван Иванович', type: 'name' },
                    { value: '100002', type: 'value' },
                    { value: '1002', type: 'valueA' },
                    { value: '100002', type: 'many' },
                    { value: '2', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 33,
                  columns: [
                    { value: '4', type: 'id' },
                    { value: 'ГИванов Иван Иванович', type: 'name' },
                    { value: '100004', type: 'value' },
                    { value: '1004', type: 'valueA' },
                    { value: '100004', type: 'many' },
                    { value: '4', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 44,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВИванов ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                }
              ]
            })
          } else {
            resolve({
              header: {
                id: 0,
                columns: [
                  {
                    value: 'Id',
                    type: 'id',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Название организации',
                    type: 'name',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Общая сумма кредитов',
                    type: 'indebtedness',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Сумма к выплате',
                    type: 'amountPaid',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Всего переплат',
                    type: 'overpayment',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Выплачено всего',
                    type: 'payments',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  },
                  {
                    value: 'Проценты',
                    type: 'percentages',
                    sort: {
                      sortBy: 'def',
                      isSort: false
                    }
                  }
                ]
              },
              rows: [
                {
                  id: 11,
                  columns: [
                    { value: '1', type: 'id' },
                    { value: 'БЗаёмщик Иван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1002', type: 'valueA' },
                    { value: '100001', type: 'many' },
                    { value: '1', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 22,
                  columns: [
                    { value: '2', type: 'id' },
                    { value: 'АЗаёмщик Иван Иванович', type: 'name' },
                    { value: '100002', type: 'value' },
                    { value: '1002', type: 'valueA' },
                    { value: '100002', type: 'many' },
                    { value: '2', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 33,
                  columns: [
                    { value: '4', type: 'id' },
                    { value: 'ГЗаёмщик Иван Иванович', type: 'name' },
                    { value: '100004', type: 'value' },
                    { value: '1004', type: 'valueA' },
                    { value: '100004', type: 'many' },
                    { value: '4', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 44,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 45,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 46,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 47,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 48,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 49,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 40,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                },
                {
                  id: 57,
                  columns: [
                    { value: '3', type: 'id' },
                    { value: 'ВЗаёмщик ИванИванИван Иванович', type: 'name' },
                    { value: '100003', type: 'value' },
                    { value: '1003', type: 'valueA' },
                    { value: '100003', type: 'many' },
                    { value: '3', type: 'profit' },
                    { value: '???', type: 'operation' }
                  ]
                }
              ]
            })
          }
        }, 1000)
      } catch (e) {
        reject(e)
      }
    })
    await promise
      .then((data) => {
        this.table = data
      })
      .catch((e) => {
        console.log(e)
      })
    return this.table
  }
}

export default new TableService()
