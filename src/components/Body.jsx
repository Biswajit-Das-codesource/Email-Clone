import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

function Body() {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
