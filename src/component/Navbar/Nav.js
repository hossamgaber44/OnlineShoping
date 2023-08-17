import react, { useContext } from 'react'
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { ShoppingContext } from '../../Context/Context';
const Nav = () => {
  const {user}=useContext(ShoppingContext)
  let username = sessionStorage.getItem('username');
  const userData = user.find((i) => i.id === username)
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-content'>
          <ul>
            <NavLink className="NavLink" to="/">
              <div className='logo-img'>
                <img src='/img/logo.png'></img>
              </div>
            </NavLink>
            <NavLink className="user" to='/userInfo' >
              <h3><i className="fa-solid fa-caret-down"></i>{userData?.id}</h3>
              <div className='user-img'>
                <div>
                  <img src='/img/user.png'></img>
                </div>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Nav 