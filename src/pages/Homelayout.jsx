import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Homelayout = () => {
  return (
    <div>
      <Navbar/>
     <section className='page'>
     <Outlet/>
     </section>
    </div>
  )
}

export default Homelayout
