import React from 'react'

interface IPaginationProps {
  tableItems: number
  countOnPage?: number
}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const { tableItems, countOnPage = 10 } = props

  const pageArr: number[] = [] as number[]

  for (let i = 1; i <= tableItems / countOnPage; i++) {
    pageArr.push(i)
  }

  console.log(pageArr)

  return (
    <ul>
      {pageArr.map((i) => {
        return <li key={i}>{i}</li>
      })}
    </ul>
  )
}

export default Pagination
