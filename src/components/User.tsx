import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../index'

const User = (props: { userData: any }) => {
  const { id } = useParams()
  let userId: number = 0
  if (id) {
    userId = +id
  }
  const {
    store: { user }
  } = useContext(Context)
  useEffect(() => {
    user.getUser(userId)
  }, [])
  return (
    <div>
      <ul>
        <li>tesadsast {id}</li>
      </ul>
    </div>
  )
}

export default User
