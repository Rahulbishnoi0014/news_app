import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/nav.css"
const Nav = () => {
  return (
    <div className='navbar'>
        <h1 className='title'>NEWS Room</h1>

      <div className='navmenu'>



        <Link to="/"><p>Home</p></Link>
        <Link to="about"><p>About</p></Link>
        <Link to={"contact"}><p>contact</p></Link>







      </div>

    </div>
  )
}

export default Nav