import { useState } from "react"


const SugarSintaxis = (props) => {
    let [contador, setContador] = useState(0)
    const handleClick = () =>{
        setContador(contador + 1)
    }

  return (
    <div>
      <h1>Hola Sugar Sintaxis</h1>
      <p>Tu nombre es: {props.nombre}</p>
      <p>Hoy el día está: {props.clima}</p>

      {props.hora >= 22 && (
        <span>Es la hora es la horaaa</span>
    
      )}
    
    <br />
    <button onClick={handleClick}>Actualizar contador</button>
    <h1>{contador}</h1>
    </div>
  )
}

export default SugarSintaxis
