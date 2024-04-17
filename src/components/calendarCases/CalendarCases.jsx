import { useState } from "react";
import PropTypes from "prop-types";
import "./CalendarCases.css";
import { months, monthsFr } from "../../services/months";
import { Themes } from "../../services/themes";

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

  const handleMonthClick = (index) => {
    setSelectedMonth(language === "fr" ? monthsFr[index] : months[index]);
    setMode("days");
  };

  return (
    <div
      className={"calendarCasesContainer"}
      style={{
        color,
        fontFamily,
        backgroundColor: backgroundColor
          ? backgroundColor
          : theme === "Standard"
            ? Themes.Standard.backgroundColor
            : Themes.Modern.backgroundColor,
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
          {language === "fr" ? "Afficher les mois" : "Show months"}
        </button>
      </div>
      {mode === "month" && (
        <div className="allMonthsContainer">
          {(language === "fr" ? monthsFr : months).map((month, index) => (
            <div key={index} className="monthsList">
              <button onClick={() => handleMonthClick(index)}>
                {month.name}
              </button>
            </div>
          ))}
        </div>
      )}
      {mode === "days" && (
        <div className="monthContainer">
          <h2>{selectedMonth.name}</h2>
          <div className="daysContainer">
            {Array.from({ length: selectedMonth.nbDays }, (_, index) => (
              <div
                style={{
                  color,
                  fontFamily,
                  backgroundColor: backgroundColor
                    ? backgroundColor
                    : theme === "Standard"
                      ? Themes.Standard.backgroundColor
                      : Themes.Modern.backgroundColor,
                  height,
                  width,
                }}
                key={index}
                className="days"
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
  theme: PropTypes.oneOf(["Standard", "Modern"]),
  height: PropTypes.string,
  width: PropTypes.string,
};

// CalendarCases.defaultProps = {
//   color: "black",
//   fontFamily: "Roboto",
//   backgroundColor: "white",
//   height: "500px",
//   width: "500px",
// };
