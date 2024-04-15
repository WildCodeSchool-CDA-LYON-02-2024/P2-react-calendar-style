import { useState } from "react";
import "./CalendarCases.css";

export default function CalendarCases() {
  const [mode, setMode] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [language, setLanguage] = useState("fr");

  const yearFr = {
    month: [
      { name: "Janvier", nbDays: 31 },
      { name: "Février", nbDays: 29 },
      { name: "Mars", nbDays: 31 },
      { name: "Avril", nbDays: 30 },
      { name: "Mai", nbDays: 31 },
      { name: "Juin", nbDays: 30 },
      { name: "Juillet", nbDays: 31 },
      { name: "Août", nbDays: 31 },
      { name: "Septembre", nbDays: 30 },
      { name: "Octobre", nbDays: 31 },
      { name: "Novembre", nbDays: 30 },
      { name: "Décembre", nbDays: 31 },
    ],
  };

  const yearEn = {
    months: [
      { name: "January", nbDays: 31 },
      { name: "February", nbDays: 29 },
      { name: "March", nbDays: 31 },
      { name: "April", nbDays: 30 },
      { name: "May", nbDays: 31 },
      { name: "June", nbDays: 30 },
      { name: "July", nbDays: 31 },
      { name: "August", nbDays: 31 },
      { name: "September", nbDays: 30 },
      { name: "October", nbDays: 31 },
      { name: "November", nbDays: 30 },
      { name: "December", nbDays: 31 },
    ],
  };

  const handleMonthClick = (index) => {
    setSelectedMonth(
      language === "fr" ? yearFr.month[index] : yearEn.months[index]
    );
    setMode("days");
  };

  const handleSwitchLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
    if (mode === "days") {
      setMode("month");
    }
  };

  return (
    <div className="calendarCasesContainer">
      <div className="topContainer">
        <button onClick={() => setMode("month")}>
          {language === "fr" ? "Afficher les mois" : "Show months"}
        </button>
        <button onClick={handleSwitchLanguage}>
          {language === "fr"
            ? "Changer de langue : (ENG)"
            : "Change language (FR)"}
        </button>
      </div>
      {mode === "month" && (
        <div className="allMonthsContainer">
          {(language === "fr" ? yearFr.month : yearEn.months).map(
            (month, index) => (
              <div key={index} className="monthsList">
                <button onClick={() => handleMonthClick(index)}>
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
