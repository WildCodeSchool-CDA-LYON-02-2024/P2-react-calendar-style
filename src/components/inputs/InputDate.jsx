
import PropTypes from "prop-types";
import "./inputDate.css";

function InputDate({
  value, 
  setValue, 
  fontFamily, 
  background, 
  color,
  height, 
  width,
  border, 
  borderRadius,
  fontSize
}) {

  const styleElement = {
    width: width,
    height : height,
    fontFamily: fontFamily,
    background: background,
    color: color,
    border: border,
    borderRadius: borderRadius,
    fontSize: fontSize
  }
 
const handleChange = (e) => {
  setValue(new Date(e.target.value));
  };
  
  const dateValue = value instanceof Date ? value.toISOString().split('T')[0] : value;

  return (
    <div>
      <input
        className="input"
        type="date"
        onChange={(e) => handleChange(e)}
        value={dateValue}
        style={styleElement}
      />
    </div>
  );
}

InputDate.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  setValue: PropTypes.func.isRequired,
  height:PropTypes.number,
  width: PropTypes.number,
  background: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string, 
  border: PropTypes.string, 
  borderRadius: PropTypes.number,
  fontSize: PropTypes.number
};

export default InputDate;
InputDate.defaultProps = {
  height: "40px",
  width: "480px",
  background: "white",
  color: "black",
  fontFamily: "arial",
  border: "1px solid blue",
  borderRadius: "5px",
  fontSize: "20px"
};
