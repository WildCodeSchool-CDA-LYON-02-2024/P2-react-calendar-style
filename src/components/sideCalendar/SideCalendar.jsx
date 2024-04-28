import { useState } from "react";
import {CalendarCases} from "../calendarCases/CalendarCases";
import {InputDate} from "../inputs/InputDate";
import {SaisonImg} from "../saison_img/SaisonImg";
import PropTypes from "prop-types";
import "./SideCalendar.css";

function SideCalendar({
  color,
  fontFamily,
  backgroundColor,
  border,
  InputDisplay,
  CalendarDisplay,
  SaisonImgDisplay,
}) {
  const [date, setDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setCurrentYear(newDate.getFullYear());
    setCurrentMonth(newDate.getMonth());
  };

  return (
    <>
      <div className="leftContainer">
        <InputDate
          value={date}
          setValue={handleDateChange}
          background={backgroundColor}
          color={color}
          fontFamily={fontFamily}
          border={border}
          display={InputDisplay}
        />
        <CalendarCases
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}

          color={color}
          fontFamily={fontFamily}
          backgroundColor={backgroundColor}
          display={CalendarDisplay}
        />
        <SaisonImg
          date={`${currentYear}-${currentMonth + 1}-${date.getDate()}`}
          border={border}
          display={SaisonImgDisplay}
        />
      </div>
    </>
  );
}

SideCalendar.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  InputDisplay: PropTypes.string,
  CalendarDisplay: PropTypes.string,
  SaisonImgDisplay: PropTypes.string,
};


export {SideCalendar,InputDate, SaisonImg, CalendarCases}
