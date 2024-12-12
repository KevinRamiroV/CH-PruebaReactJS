import { useState } from "react";
import { styles } from "../service/style";
import itemImg from "../img/HoodieOversized.jpg"

function ItemCount({ stock = 10, initial = 1, onAdd, itemTitle = "Camisa" }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) { // Cambié esto para que el mínimo sea 1
            setCount(count - 1);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}> {itemTitle} </h2>
            <img src={itemImg} alt="" style={styles.itemImg}/>
            <div style={styles.counterContainer}>
                <button 
                    style={{
                        ...styles.button,
                        ...(count === 1 ? styles.disabledButton : {})
                    }}
                    onClick={handleDecrement}
                    disabled={count === 1} // Deshabilita si el count es 1
                >
                    -
                </button>

                <span style={styles.counter}>{count}</span> {/* Corregido para mostrar el valor correcto */}

                <button 
                    style={{
                        ...styles.button,
                        ...(count === stock ? styles.disabledButton : {})
                    }}
                    onClick={handleIncrement}
                    disabled={count === stock} // Deshabilita si count es igual al stock
                >
                    +
                </button>
                 
            </div>
            <div >  
                    <button style={styles.addButton} onClick={()=>{
                        onAdd(count)
                         }}>
                    Agregar al carrito
                    </button>
                </div> 
        </div>
    );
}

export default ItemCount;
