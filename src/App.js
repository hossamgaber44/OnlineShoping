import React, { useEffect } from 'react';
import Nav from './component/Navbar/Nav'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ContextProvider from './Context/Context'
import Body from './component/body/Body';
import Home from './component/body/Home/Home';
import Cart from './component/body/Cart/Cart';
import Admin from './component/body/Admin/Admin';
import EditProduct from './component/body/Admin/EditProduct/EditProduct';
import Login from './component/Authentication/Login/Login';
import Register from './component/Authentication/Register/Register';
import OrderForm from './component/body/Cart/OrderForm/OrderForm';
import Orders from './component/body/Admin/Orders/Orders';
import Users from './component/body/Admin/Users/Users';
import OrderInformation from './component/body/Admin/Orders/OrderInformation/OrderInformation';
import UserInfo from './component/UserInfo/UserInfo';
import UserInfoForm from './component/UserInfo/UserInfoForm/UserInfoForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
      navigate('/login')
    }
  }, [])
  return (
    <>
      <ContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path='addProduct' element={<Admin />} />
            <Route path='editProduct/:id' element={<EditProduct />} />
            <Route path='orders' element={<Orders />} />
            <Route path='users' element={<Users />} />
            <Route path='orderInformation/:id' element={<OrderInformation />} />
            <Route path='/orderform' element={<OrderForm />} />
            <Route path='/userInfo' element={<UserInfo />} />
            <Route path='/userInfoForm' element={<UserInfoForm />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </ContextProvider>
      <ToastContainer />
    </>
  )
}


export default App;




