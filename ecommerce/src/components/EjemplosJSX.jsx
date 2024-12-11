
import { useState } from "react";
import img1 from "../img/gorro.jpg"

function EjemplosJSX() {
    
    const [visible, setVisible] = useState(false)
    const imgStyle = {width: "200px"}
    const nombre = "Damian"
    const numeros = [1, 2, 3, 4, 5];
    const handleClick = () =>{
        let validarVisible = visible;
        if (validarVisible == true) {
            setVisible(false)
        } else {setVisible(true)}
    }

  return (
    <div className="btn">
      <h1>Ejemplo JSX</h1>
      <img style={imgStyle} src={img1} alt="imagen"/>

        <h1>Hola {nombre}</h1>
        <button onClick={handleClick}>Haz click para ver el contenido secreto</button>
        <br />
        <div> {visible ? <p>Es visible el contenido</p> : null} </div>
        <br />
        <u>
            {
                numeros.map((num) =>(
                <li key={num}>{num}</li>
                 ))
            }
         </u>

         <br />

         <label htmlFor="textoo">Etiqueta: </label>
         <input id="textoo" type="text" />
    </div>
  )
}

export default EjemplosJSX
