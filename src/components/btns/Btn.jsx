import PropTypes from "prop-types";
function Btn({
    className = "",
    width= "",
    height= "",
    fontFamily= "Arial",
    fontSize = 30,
    background = "#00012E",
    color = "#fff",
    border = "0px",
    borderRadius = 0,
    padding = "3px 15px",
    onClick = null,
    type = "button" | "submit" | "reset",
    disabled = false,
    children  
}) {
  return (
    <button
    className={className}
    style={{
        width: width,
        height: height,
        color: color,
        fontFamily: fontFamily,
        fontSize: fontSize,
        background: background,
        border: border,
        borderRadius: borderRadius,
        padding: padding
    }}
    onClick= {() => onClick()}
    disabled={disabled}
    type={type}
    >
    {children}
    </button>
  )
}

Btn.propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    background: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string, 
    borderRadius: PropTypes.number,
    padding: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.element  
  };

  export default Btn;

  Btn.defaultProps = {
    height: "80px",
    width: "50",
    background: "white",
    color: "black",
    fontFamily: "arial",
    border: "2px solid blue",
    borderRadius: "5px",
    fontSize: "20px",
    type:"button" || "submit" || "reset",
    disabled: false,
    children: "button"
  }