import { useState, useRef } from "react";
import "./CalendarCases.css";
import { months, monthsFr } from "../../services/months";
import { getNumberOfDaysInMonth, range } from "../../services/Calendar";
import PropTypes from "prop-types";
import { Themes } from "../../services/themes";
import { WeekDaysCases } from "../weekDaysCase/WeekDaysCases";

export function CalendarCases({
  language = "fr",
  color,
  fontFamily,
  backgroundColor,
  display,
  theme = "Default",
  selectedDatesArray = [],
  setSelectedDatesArray,
  onDateClick,
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startSelectionDate, setStartSelectionDate] = useState(null);

  const selectedTheme = Themes[theme] || null;
  const calendarRef = useRef(null);

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

  const handleSelectDate = (event, day) => {
    setIsMouseDown(true);
    setStartSelectionDate(new Date(currentYear, currentMonth, day));
    setSelectedDatesArray([new Date(currentYear, currentMonth, day)]);
    if (onDateClick) {
      onDateClick(new Date(currentYear, currentMonth, day));
    }
  };

  const handleMouseEnter = (event, day) => {
    if (isMouseDown) {
      const newDate = new Date(currentYear, currentMonth, day);
      if (!selectedDatesArray.some((date) => date.getTime() === newDate.getTime())) {
        setSelectedDatesArray([...selectedDatesArray, newDate]);
        if (onDateClick) {
          onDateClick(newDate);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
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
      <div className="weekDays">
        <WeekDaysCases
          color={color}
          fontFamily={fontFamily}
          backgroundColor={backgroundColor}
        />
      </div>
      <div
        className="monthContainer"
        onMouseUp={handleMouseUp}
        ref={calendarRef}
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
                  selectedDatesArray.some(
                    (date) =>
                      date.getTime() === new Date(currentYear, currentMonth, day).getTime()
                  )
                    ? "active"
                    : isMouseDown && startSelectionDate && day >= startSelectionDate.getDate()
                    ? "hover"
                    : ""
                }
                onMouseDown={(event) => handleSelectDate(event, day)}
                onMouseEnter={(event) => handleMouseEnter(event, day)}
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
  language: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
  display: PropTypes.string,
  theme: PropTypes.string,
  selectedDatesArray: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  setSelectedDatesArray: PropTypes.func,
  onDateClick: PropTypes.func,
};
