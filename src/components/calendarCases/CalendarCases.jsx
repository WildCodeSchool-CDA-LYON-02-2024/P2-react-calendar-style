// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { months, monthsFr } from "../../services/months";
// import "./CalendarCases.css";

// export default function CalendarCases({
//   language,
//   color,
//   fontFamily,
//   backgroundColor,
//   theme,
//   height,
//   width,
// }) {
//   const [mode, setMode] = useState("month");
//   const [selectedMonth, setSelectedMonth] = useState(null);

//   const handleMonthClick = (index) => {
//     setSelectedMonth(language === "fr" ? monthsFr[index] : months[index]);
//     setMode("days");
//   };

//   useEffect(() => {
//     if (theme === "custom") {
//       import("./CalendarCases2.css")
//         .then(() => {
//           console.log("Custom CSS loaded");
//         })
//         .catch((error) => {
//           console.error("Error loading custom CSS:", error);
//         });
//     }
//   }, [theme]);

//   return (
//     <div
//       className={"calendarCasesContainer"}
//       style={{
//         color,
//         fontFamily,
//         backgroundColor,
//         height,
//         width,
//       }}
//     >
//       <div className="topContainer">
//         <button
//           onClick={() => setMode("month")}
//           style={{
//             color,
//             fontFamily,
//             backgroundColor,
//           }}
//         >
//           {language === "fr" ? "Afficher les mois" : "Show months"}
//         </button>
//       </div>
//       {mode === "month" && (
//         <div className="allMonthsContainer">
//           {(language === "fr" ? monthsFr : months).map((month, index) => (
//             <div key={index} className="monthsList">
//               <button onClick={() => handleMonthClick(index)}>
//                 {month.name}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       {mode === "days" && (
//         <div className="monthContainer">
//           <h2>{selectedMonth.name}</h2>
//           <div className="daysContainer">
//             {Array.from({ length: selectedMonth.nbDays }, (_, index) => (
//               <div
//                 style={{
//                   color,
//                   fontFamily,
//                   backgroundColor,
//                   height,
//                   width,
//                 }}
//                 key={index}
//                 className="days"
//               >
//                 {index + 1}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// CalendarCases.propTypes = {
//   language: PropTypes.oneOf(["fr", "eng"]),
//   color: PropTypes.string,
//   fontFamily: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   theme: PropTypes.oneOf(["Standard", "custom"]),
//   height: PropTypes.string,
//   width: PropTypes.string,
// };

// CalendarCases.defaultProps = {
//   color: "black",
//   fontFamily: "Roboto",
//   backgroundColor: "white",
//   theme: "Standard",
// };
import { useState } from "react";
import "./CalendarCases2.css";
import { months } from "../../services/months";
import WeekDaysCases from "../weekDaysCase/WeekDaysCases";
import { getNumberOfDaysInMonth, range } from "../../services";
import PropTypes from "prop-types";

export default function CalendarCases({color, fontFamily, backgroundColor}) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelect = (event) => {
    if (event.target.id === "day") {
      setSelectedDate(
        new Date(
          currentYear,
          currentMonth,
          event.target.getAttribute("data-day")
        )
      );
    }
  };

  return (
    <section>
      <div
        className="header"
        style={{
          color,
          fontFamily,
          backgroundColor,
        }}
      >
        <button onClick={prevMonth}>{" < "}</button>
        <p
          style={{
            color,
            fontFamily,
            backgroundColor,
          }}
        >
          {months[currentMonth]} {currentYear}
        </p>
        <button onClick={nextMonth}>{" > "}</button>
      </div>
      <div className="weekDays">
        <WeekDaysCases />
      </div>
      <div
        className="monthContainer"
        onClick={handleSelect}
        style={{
          color,
          fontFamily,
          backgroundColor,
        }}
      >
        {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map(
          (day, i) => (
            <p
              style={{
                color,
                fontFamily,
                backgroundColor,
              }}
              id="day"
              data-day={day}
              key={i}
              className={
                selectedDate?.getTime() ===
                new Date(currentYear, currentMonth, day).getTime()
                  ? "active"
                  : ""
              }
            >
              {day}
            </p>
          )
        )}
      </div>
    </section>
  );
}

CalendarCases.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
};

CalendarCases.defaultProps = {
  color: "black",
  fontFamily: "Roboto",
  backgroundColor: "white",
};
