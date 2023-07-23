import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

export default function Layout() {
  return (
    <div>
        <NavBar></NavBar>
        <div className='max-w-6xl mx-auto p-3'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
