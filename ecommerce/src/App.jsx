import { useState } from "react"
import SugarSintaxis from "./components/SugarSintaxis"
import BotonMultiuso from "./components/BotonMultiuso"
import EjemplosJSX from "./components/EjemplosJSX"

function App() {
  

  return (
    <>
      {/* <SugarSintaxis nombre="Damian" clima="Nublado" hora="22"></SugarSintaxis> */}
      {/* <BotonMultiuso
        color="red" label="Haga click"
        onClick={()=>{
          alert("Alertaaaaa");
        }}
      /> */}

      <EjemplosJSX/>

    </>
  )
}



export default App
