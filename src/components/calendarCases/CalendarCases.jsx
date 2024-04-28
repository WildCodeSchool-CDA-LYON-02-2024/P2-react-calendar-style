import { useState } from "react";
import "./CalendarCases2.css";
import { months } from "../../services/months";
import WeekDaysCases from "../weekDaysCase/WeekDaysCases";
import { getNumberOfDaysInMonth, range } from "../../services";
import PropTypes from "prop-types";

export function CalendarCases({
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
  color,
  fontFamily,
  backgroundColor,
  display,
}) {
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
    <section
      style={{
        display,
      }}
    >
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
        <WeekDaysCases
          color={color}
          fontFamily={fontFamily}
          backgroundColor={backgroundColor}
        />
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
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
  currentMonth: PropTypes.number,
  setCurrentMonth: PropTypes.func,
  currentYear: PropTypes.number,
  setCurrentYear: PropTypes.func,
  display: PropTypes.string,
};

// CalendarCases.defaultProps = {
//   color: "black",
//   fontFamily: "Roboto",
//   backgroundColor: "white",
// };
