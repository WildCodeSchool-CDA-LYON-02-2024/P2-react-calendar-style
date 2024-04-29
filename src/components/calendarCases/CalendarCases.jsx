import { useState } from "react";
import "./CalendarCases.css";
import { months, monthsFr } from "../../services/months";
import { getNumberOfDaysInMonth, range } from "../../services/Calendar";
import PropTypes from "prop-types";
import { Themes } from "../../services/themes";

export default function CalendarCases({
  language = "fr",
  color,
  fontFamily,
  backgroundColor,
  display,
  theme = "Default",
  selectedDatesArray = [],
  setSelectedDatesArray,
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const selectedTheme = Themes[theme] || null;

  console.log(selectedDatesArray);

  const applyThemeStyles = () => ({
    color: color || selectedTheme.color,
    backgroundColor: backgroundColor || selectedTheme.backgroundColor,
    fontFamily: fontFamily || selectedTheme.fontFamily,
  });

  const getFirstDayOfMonth = () => {
    return new Date(currentYear, currentMonth, 1).getDay();
  };

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
      const newSelectedDate = new Date(
        currentYear,
        currentMonth,
        event.target.getAttribute("data-day")
      );
      setSelectedDate(newSelectedDate);
      setSelectedDatesArray([newSelectedDate]);
    }
  };

  const daysInMonth = getNumberOfDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth();
  const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  return (
    <section
      style={{
        display,
      }}
    >
      <div className="header" style={applyThemeStyles()}>
        <button onClick={prevMonth}>{" << "}</button>
        <p style={applyThemeStyles()}>
          {language === "fr" ? monthsFr[currentMonth] : months[currentMonth]}{" "}
          {currentYear}
        </p>
        <button onClick={nextMonth}>{" >> "}</button>
      </div>
      <div
        className="monthContainer"
        onClick={handleSelect}
        style={applyThemeStyles()}
      >
        {range(1 - startingDay, daysInMonth + 1).map((day, i) => {
          if (day > 0) {
            return (
              <p
                style={applyThemeStyles()}
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
            );
          } else {
            return <p key={i}></p>;
          }
        })}
      </div>
    </section>
  );
}

CalendarCases.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  language: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
  theme: PropTypes.string,
  display: PropTypes.string,
  selectedDatesArray: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  setSelectedDatesArray: PropTypes.func,
};
