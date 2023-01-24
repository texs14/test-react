import { IRow } from '../../models/Table/ITable'

export const HEADER_BORROWERS: IRow = {
  id: '0',
  columns: [
    // {
    //   value: 'Id',
    //   type: 'id',
    //   sort: {
    //     sortBy: 'def',
    //     isSort: false
    //   }
    // },
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
      type: 'numberShares',
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
    }
    // {
    //   value: 'Операции на Счёте вкладчика',
    //   type: 'operation'
    // }
  ]
}

export const TYPES_BORROWERS_ARR: string[] = [
  // 'id',
  'name',
  'value',
  'numberShares',
  'many',
  'profit'
  // 'operation'
]

export const HEADER_CONTRIBUTORS: IRow = {
  id: '0',
  columns: [
    // {
    //   value: 'Id',
    //   type: 'id',
    //   sort: {
    //     sortBy: 'def',
    //     isSort: false
    //   }
    // },
    {
      value: 'Название организации',
      type: 'name',
      sort: {
        sortBy: 'def',
        isSort: false
      }
    },
    {
      value: 'Занято всего',
      type: 'indebtedness',
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
      value: 'Выплачено',
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
}

export const TYPES_CONTRIBUTORS_ARR: string[] = [
  // 'id',
  'name',
  'indebtedness',
  'overpayment',
  'payments',
  'percentages'
]
