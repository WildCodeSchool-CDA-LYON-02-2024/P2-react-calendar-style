import { useState } from "react";
import CalendarCases from "../calendarCases/CalendarCases";
import InputDate from "../inputs/InputDate";
import SaisonImg from "../saison_img/SaisonImg";
import PropTypes from "prop-types";
import './SideContainer.css'

export default function SideCalendar({ color, fontFamily, backgroundColor }) {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  return (
    <>
    <div className="leftContainer">
      <InputDate
        value={date}
        setValue={setDate}
        background={backgroundColor}
        color={color}
        fontFamily={fontFamily}
      />
      <CalendarCases
        color={color}
        fontFamily={fontFamily}
        backgroundColor={backgroundColor}
      />
      <SaisonImg
        date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
      />
      </div>
    </>
  );
}

SideCalendar.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
};
