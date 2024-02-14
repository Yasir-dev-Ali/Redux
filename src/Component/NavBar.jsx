import React from 'react'
import { Link } from 'react-router-dom'
import '../Component/NavBar.css'

const NavBar = () => {
  return (
    <>
       <div className="container">
        <div className="logo">
            <h1>My Store</h1>
        </div>
        <div className="nav">
            <Link to={"/"} >Home</Link>
            <Link to={"/Cart"} >Cart</Link>
        </div>
        <div className="cart">
            <span>Cart Item:0 </span>
        </div>
       </div>
    </>
  )
}

export default NavBar
