import React, { useContext, useEffect, useState } from 'react'
import './UserInfo.css'
import { ShoppingContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
const UserInfo = () => {
  const { user } = useContext(ShoppingContext)
  let username = sessionStorage.getItem('username');
  const userData = user.find((i) => i.id === username)
  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    const password = sessionStorage.getItem('password');
    if (username === 'admin' && password === '123456789') {
      setAdmin(true)
    } else {
      setAdmin(false)
    }
  }, [])
  return (
    <div className='userInfo'>
      <div className='userInfo-content'>
        <div className='user-img-content' >
          <div className='user-img'>
            <div className='user-img-border' >
              <img src='/img/user.png' />
            </div>
          </div>
          <h3 className='user-fullName'>{userData?.fullName}</h3>
        </div>
        <div className='user-data'>
          <h3><span>user name : </span> {userData?.id}</h3>
          <h3><span>password : </span>{userData?.password}</h3>
          <h3><span>email : </span>{userData?.email}</h3>
          <h3><span>phone number : </span>{userData?.phone}</h3>
          <h3><span>address : </span>{userData?.address}</h3>
          <h3><span>city : </span>{userData?.city}</h3>
          <h3><span>gender : </span>{userData?.gender}</h3>
        </div>
        <div className='footer-userInfo'>
          <Link style={{display:admin&& 'none'}} className='footer-userInfo-btn' to='/userInfoForm' type='submit'>Chang data</Link>
          <Link className='back-form' to='/'>Back</Link>
        </div>
      </div>
    </div>
  )
}

export default UserInfo