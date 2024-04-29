import PropTypes from "prop-types";

import "./darkModeToggle.css"

const DarkModeToggle = ({ value, setValue }) => {

  const toggleDarkMode = () => {
   
    setValue(!value);
  };

  return (
    <div>
      <button 
        className={value ? "dark-mode" : "light-mode"}
        onClick={toggleDarkMode}>
        {value ? ' Mode sombre 🌙' : 'Mode clair ☀️ '}       
      </button>
    </div>
  );
};

DarkModeToggle.propTypes = {
  value: PropTypes.bool.isRequired, 
  setValue: PropTypes.func.isRequired,
}

export default DarkModeToggle;