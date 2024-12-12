import './Navbar.css'
import LogoCart from "../img/LogoCart.png"
import ShoppingCart from "../img/shopping-cart.png"
import { Children, useState } from 'react'

function Navbar({children}) {
  const [CartStatus, setCartStatus] = useState(false)
  const handleOpenCart = ()=>{
    let actualCartStatus = CartStatus;
    if( actualCartStatus == false){
      setCartStatus(true)
    } else {
      setCartStatus(false)
    }
  }

  return (
    <nav className="navbar">
        <div className='navLogo'>
            <img src={LogoCart} alt="Logo" className='Logo'/>
        </div>
        <ul className='navItems'>
            <li className='navItem'><a href="#"></a>Inicio</li>
            <li className='navItem'><a href="#"></a>Verano</li>
            <li className='navItem'><a href="#"></a>Invierno</li>
            <li className='navItem'><a href="#"></a>Sport</li>
        </ul>
        <div className='navShoppingCart'>
            <img src={ShoppingCart} alt="Carrito" className='shoppingCartLogo' onClick={handleOpenCart}/>
        </div>
        {children}
    </nav>
  )
}

export default Navbar