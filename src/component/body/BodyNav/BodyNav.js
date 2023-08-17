import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../../Context/Context'
import { NavLink, useNavigate } from 'react-router-dom'
import './BodyNav.css'
import DarkMode from './DarkMode/DarkMode'
const BodyNav = () => {
  const { CartQuantity } = useContext(ShoppingContext);
  const [admin, setAdmin] = useState(false)
  const [isOpin, setIsOpin] = useState(false)
  const navigate = useNavigate()
  useEffect((e) => {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    if (username === 'admin' && password === '123456789') {
      setAdmin(true)
    } else {
      navigate('/')
    }
  }, [])
  return (
    <>
      <ul className='BodyNav' style={{ left: isOpin && "0" }}  >
        <div className='nav-theme'>
          <DarkMode />
        </div>
        <NavLink onClick={() => isOpin && setIsOpin(false)} className='NavLink' to='/'>
          <i className="home-icon fa-solid fa-house"></i>
          <h2>Home</h2>
        </NavLink>
        <NavLink onClick={() => isOpin && setIsOpin(false)} className='NavLink' to={'/cart '}>
          <div className='middle-header-shopping-cart'>
            <i className='fa-solid fa-cart-shopping cart-icon'></i>
            {CartQuantity > 0 ?
              <span className='cart-notification'>{CartQuantity}</span> : ''
            }
          </div>
          <h2>Cart</h2>
        </NavLink>
        {admin && <> <NavLink onClick={() => isOpin && setIsOpin(false)} className='NavLink' to='/addProduct'>
          <i className="home-icon fa-sharp fa-solid fa-gears"></i>
          <h2>Set Products</h2>
        </NavLink>
          <NavLink onClick={() => isOpin && setIsOpin(false)} className='NavLink' to='/orders'>
            <i className="home-icon fa-solid fa-truck"></i>
            <h2>Orders</h2>
          </NavLink>
          <NavLink onClick={() => isOpin && setIsOpin(false)} className='NavLink' to='/users'>
            <i className="home-icon fa-solid fa-user-group"></i>
            <h2>Users</h2>
          </NavLink>
        </>}
        <a onClick={() => isOpin && setIsOpin(false)} className='NavLink' href='/login'>
          <i className="home-icon fa-solid fa-right-from-bracket"></i>
          <h2>Log Out</h2>
        </a>
        <span onClick={() => isOpin ? setIsOpin(false) : setIsOpin(true)} style={{ right: !isOpin && '-42px' }} className='nav-menu'>{isOpin ? <i className="fa-solid fa-arrow-left"></i> : <i className="fa-solid fa-arrow-right"></i>}</span>
      </ul>
      <div className='overlay' onClick={() => isOpin && setIsOpin(false)} style={{ display: !isOpin && 'none' }} >
      </div>
    </>
  )
}

export default BodyNav