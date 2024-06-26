import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "./gridCalendar.css";
import Btn from "../btns/Btn";

function GrilleWeek({
  value = new Date(),
  setValue,
  heigth = "500px",
  padding = "5px 32px",
}) {
  const days = [
    "samedi",
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
  ];
  const hours = [
    "00h00",
    "01h00",
    "02h00",
    "03h00",
    "04h00",
    "05h00",
    "06h00",
    "07h00",
    "08h00",
    "09h00",
    "10h00",
    "11h00",
    "12h00",
    "13h00",
    "14h00",
    "15h00",
    "16h00",
    "17h00",
    "18h00",
    "19h00",
    "20h00",
    "21h00",
    "22h00",
    "23h00",
  ];

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [dateSelected, setDateSelected] = useState(value);
  const [heurSelected, setheurSelected] = useState(null);

  useEffect(() => {
    const pageCurr = value?.getDate() / itemsPerPage;
    setCurrentPage(Math.ceil(pageCurr));
  }, [value]);

  const handleDateClick = (date) => {
    setValue(date);
  };

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(value.getMonth(), value.getFullYear());

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, daysInMonth?.length);

  const daysItems = daysInMonth?.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const selectHour = (day, hour) => {
    setDateSelected(day);
    setheurSelected(hour);
  };
  return (
    <div className="rowCalendar" style={{ height: heigth }}>
      <div className="monthSelect">
        <p>
          {value.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </p>
        {heurSelected && (
          <p>
            Vous avez selectionne{" "}
            {`${dateSelected?.getDate()}-${dateSelected?.getMonth()}- ${dateSelected?.getFullYear()}`}
            {`A  ${heurSelected}`}
          </p>
        )}
      </div>
      <table className="table">
        <thead>
          <tr className="thDay">
            <th></th>
            {days.map((day, index) => (
              <th className="tabledays" key={index}>
                <span>{day}</span>
              </th>
            ))}
            <th></th>
          </tr>
          <tr>
            <th>
              <Btn
                onClick={prevPage}
                disabled={currentPage === 1}
                padding={padding}
              >
                {"<<"}
              </Btn>
            </th>
            {daysItems.map((day, i) => (
              <th
                key={i}
                className={
                  day.getDate() == value.getDate() ? "daySelected" : ""
                }
                onClick={() => handleDateClick(day)}
              >
                <span className="text">{day.getDate()}</span>
              </th>
            ))}
            <th>
              <Btn
                onClick={nextPage}
                disabled={endIndex >= daysInMonth.length}
                padding={padding}
              >
                {">>"}
              </Btn>
            </th>
          </tr>
        </thead>
        <tbody className="scrolled">
          {hours.map((hour, index) => (
            <tr key={index} className="thDay">
              <td className="tableHour">
                <span className="text">{hour}</span>
              </td>

              {daysItems.map((day, i) => (
                <td
                  className={
                    day.getDate() == value.getDate() ? "daySelected" : ""
                  }
                  key={i}
                  onClick={() => selectHour(day, hour)}
                >
                  <input
                    type="checkbox"
                    checked={
                      hour === heurSelected &&
                      dateSelected?.getDate() === day?.getDate()
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

GrilleWeek.propTypes = {
  value: PropTypes.Date,
  setValue: PropTypes.func,
  heigth: PropTypes.string,
  padding: PropTypes.string,
};

export { GrilleWeek };
