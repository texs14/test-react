import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

interface IErrorPageProps {}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = () => {
  // const navigate = useNavigate()
  // const location = useLocation()
  // const regExpLocation = new RegExp(location.pathname)

  // useEffect(() => {
  //   if (regExpLocation.test('/') || regExpLocation.test('/table/')) {
  //     console.log('tyt table')
  //
  //     navigate('/table/contributors')
  //   }
  // }, [])
  return <div>Error</div>
}

export default ErrorPage
