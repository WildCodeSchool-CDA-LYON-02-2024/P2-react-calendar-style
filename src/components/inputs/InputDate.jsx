
import PropTypes from "prop-types";
import "./inputDate.css";

function InputDate({ value, setValue, background = "#fff", color = "#000"}) {
  const handleChange = (e) => {
    setValue(new Date(e.target.value));
  };

  // Convertir la valeur en chaîne au format ISO si elle est une instance de Date
  const dateValue = value instanceof Date ? value.toISOString().split('T')[0] : value;

  return (
    <div>
      <input
        className="input"
        type="date"
        onChange={(e) => handleChange(e)}
        value={dateValue} // Utiliser la valeur convertie
        style={{ background: background, color: color, border: "1px solid " + color }}
      />
    </div>
  );
}

InputDate.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  setValue: PropTypes.func.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
};

export default InputDate;