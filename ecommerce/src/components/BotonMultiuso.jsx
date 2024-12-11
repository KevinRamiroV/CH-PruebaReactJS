
const BotonMultiuso = ({color = "red", label, onClick, children}) => {
    const style = {
        backgroundColor: color,
        padding: "10px 20px",
        margin: "20px",
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        cursor: "pointer"
    }
    const styleDiv = {
        padding: "20px"
    }

  return (
    <div style={styleDiv}>
      <button style={style} onClick={onClick}>
        {children || label || "Predeterminado"}
      </button>
    </div>
  )
}

export default BotonMultiuso
