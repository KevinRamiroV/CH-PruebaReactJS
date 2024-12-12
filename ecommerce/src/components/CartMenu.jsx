import React, { children } from 'react'
import { useState } from "react";
import ShoppingCart from "../img/shopping-cart.png"
import closeBtn from "../img/close.png"
import './Navbar.css'

function CartMenu() {
  return (
    <div className='ActualCart'>
        <div className='ActualCartHeader'>
            <h1>Carrito:</h1>
            <div className='HeaderButtons'>
                <img src={ShoppingCart} alt="" className='shoppingCartLogo'/>
                <img src={closeBtn} alt="" className='closeBtn'/>
            </div>
            

        </div>
        <div>
            item
        </div>
    </div>
  )
}

export default CartMenu