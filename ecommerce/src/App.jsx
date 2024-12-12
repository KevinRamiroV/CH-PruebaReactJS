import { useState } from "react"
import SugarSintaxis from "./components/SugarSintaxis"
import BotonMultiuso from "./components/BotonMultiuso"
import EjemplosJSX from "./components/EjemplosJSX"
import ItemCount from "./components/ItemCount"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import CartMenu from "./components/CartMenu"

function App() {
  
  const handleAddToCart = (quantity)=>{
    alert(`Has agregado ${quantity} producto(s) al carrito`)
  }



  return (
    <>
      {/* <SugarSintaxis nombre="Damian" clima="Nublado" hora="22"></SugarSintaxis> */}
      {/* <BotonMultiuso
        color="red" label="Haga click"
        onClick={()=>{
          alert("Alertaaaaa");
        }}
      /> */}

      {/* <EjemplosJSX/> */}
      <Navbar>
        {/* <CartMenu></CartMenu> */}
      </Navbar>
      
      <MainContent>
        <ItemCount stock = {10} initial = {1} onAdd = {handleAddToCart} itemTitle="Hoodie Oversize" />
        <ItemCount stock = {10} initial = {1} onAdd = {handleAddToCart} itemTitle="Gorro" />
        <ItemCount stock = {10} initial = {1} onAdd = {handleAddToCart} itemTitle="Control" />
        <ItemCount stock = {10} initial = {1} onAdd = {handleAddToCart} itemTitle="Conjunto deportivo" itemImg=""/>
      </MainContent>
      
      <Footer/>
    </>
  )
}



export default App
