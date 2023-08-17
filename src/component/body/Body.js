import React from 'react'
import BodyNav from './BodyNav/BodyNav'
import { Outlet } from 'react-router-dom'
import './Body.css'
const Body = () => {
  return (
    <div>
        <BodyNav/>
        <div className='Body-content' ><Outlet/></div>
    </div>
  )
}

export default Body