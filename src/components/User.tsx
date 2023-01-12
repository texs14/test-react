import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../models/User/IUser'
// interface IUserProps {
//   userData: any
// }

const User: React.FunctionComponent = () => {
  const [user, setUser] = useState({} as any)
  const navigate = useNavigate()
  const { id } = useParams()
  let userId: number = 0

  if (id) {
    userId = +id
  }

  const {
    store: { user: userStore }
  } = useContext(Context)

  let userData = {} as IUser

  useEffect(() => {
    userData = userStore.getUser(userId)
    console.log('userData', userData)

    // Проверка на существование пользователя
    if (typeof userData.name === 'string') {
      setUser(userData)
    } else {
      navigate('/table/contributors')
    }
    console.log('userData', userData)
  }, [])

  return (
    <div>
      <span onClick={() => navigate(-1)}>Вернуться назад</span>
      <h2>{user.name}</h2>
      <span>Акций: {user.valueA}</span>
      <span>Денег вложено: {user.many}</span>
      <span>Денег доступно к выводу: {user.valueA}</span>
      <span>Профит: {user.profit}</span>
      <span>Операции пользователя: {user.operation}</span>
    </div>
  )
}

export default User
