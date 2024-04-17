import { useState } from "react";
import PropTypes from "prop-types";
import "./CalendarCases.css";
import { months, monthsFr } from "../../services/months";
import {Themes} from "../../services/themes";


export default function CalendarCases({
  language,
  color,
  fontFamily,
  backgroundColor,
  theme,
  height,
  width,
}) {
  const [mode, setMode] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [currentLanguage] = useState(language);
  const [currentThemes]= useState(theme)

  const handleMonthClick = (index) => {
    setSelectedMonth(
      currentLanguage === "fr" ? monthsFr[index] : months[index]
    );
    setMode("days");
  };

  const handleSelect = (index) => {
    return console.log(index.target.value);
  };

  (theme === "default" ? Themes.Standard : Themes.Modern)

  console.log(currentThemes);


  return (
    <div
      className={"calendarCasesContainer"}
      style={{
        color,
        fontFamily,
        backgroundColor: currentThemes.backgroundColor,
        height,
        width,
      }}
    >
      <div className="topContainer">
        <button
          onClick={() => setMode("month")}
          style={{
            color,
            fontFamily,
            backgroundColor,
          }}
        >
          {currentLanguage === "fr" ? "Afficher les mois" : "Show months"}
        </button>
      </div>
      {mode === "month" && (
        <div className="allMonthsContainer">
          {(currentLanguage === "fr" ? monthsFr : months).map(
            (month, index) => (
              <div key={index} className="monthsList">
                <button
                  onClick={() => handleMonthClick(index)}
                  style={{
                    color,
                    fontFamily,
                    backgroundColor,
                  }}
                >
                  {month.name}
                </button>
              </div>
            )
          )}
        </div>
      )}
      {mode === "days" && (
        <div className="monthContainer">
          <h2>{selectedMonth.name}</h2>
          <div className="daysContainer">
            {Array.from({ length: selectedMonth.nbDays }, (_, index) => (
              <div
                key={index}
                className="days"
                onClick={() => handleSelect(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

CalendarCases.propTypes = {
  language: PropTypes.oneOf(["fr", "eng"]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

// CalendarCases.defaultProps = {
//   language: "fr",
//   color: "black",
//   fontFamily: "Roboto",
//   backgroundColor: "white",
//   height: "500px",
//   width: "500px",
// };
