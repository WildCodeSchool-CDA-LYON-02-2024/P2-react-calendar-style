import { useState } from "react";
import PropTypes from "prop-types";
import "./CalendarCases.css";
import { months, monthsFr } from "../../services/months";

export default function CalendarCases({
  language,
  color,
  fontFamily,
  backgroundColor,
  height,
  width,
}) {
  const [mode, setMode] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [currentLanguage] = useState(language);

  const handleMonthClick = (index) => {
    setSelectedMonth(
      currentLanguage === "fr" ? monthsFr[index] : months[index]
    );
    setMode("days");
  };

  return (
    <div
      className={`calendarCasesContainer light`}
      style={{
        color: color ? color : "black",
        fontFamily: fontFamily ? fontFamily : "Roboto",
        backgroundColor: backgroundColor ? backgroundColor : "white",
        height: height? height : "500px",
        width: width ? width : "500px",
      }}
    >
      <div className="topContainer">
        <button
          onClick={() => setMode("month")}
          style={{
            color: color ? color : "black",
            fontFamily: fontFamily ? fontFamily : "Roboto",
            backgroundColor: backgroundColor ? backgroundColor : "white",
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
                    color: color ? color : "black",
                    fontFamily: fontFamily ? fontFamily : "Roboto",
                    backgroundColor: backgroundColor ? backgroundColor : "white",
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
              <div key={index} className="days">
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

