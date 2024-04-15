import { useState } from "react";
import "./CalendarCases.css";

export default function CalendarCases() {
  const [mode, setMode] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState(null);

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

  const handleMonthClick = (index) => {
    setSelectedMonth(yearFr.month[index]);
    setMode("nbDays");
  };

  return (
    <div className="calendarCasesContainer">
      <div>
        <button onClick={() => setMode("month")}>Afficher les mois</button>
      </div>
      {mode === "month" && (
        <div className="allMonthsContainer">
          {yearFr.month.map((month, index) => (
            <div key={index} className="monthsList">
              <button onClick={() => handleMonthClick(index)}>
                {month.name}
              </button>
            </div>
          ))}
        </div>
      )}
      {mode === "nbDays" && (
        <div className="monthContainer">
          {selectedMonth.name}
          <div className="daysContainer">
          {Array.from({ length: selectedMonth.nbDays }, (_, index) => (
            <div key={index} className="days">{index + 1}</div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}
