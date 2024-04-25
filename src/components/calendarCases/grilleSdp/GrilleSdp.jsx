import hours from '../../../services/hours';
import PropTypes from 'prop-types';
import './GrilleSdp.css';
import { useState } from 'react';
import { monthsFr } from '../../../services/months';

function GrilleSdp({ WeekDaysCases, value }) {
  const jours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let getDate = value.getDate();
  console.log(getDate, 'date');

  const [selectedDay, setSelectedDay] = useState(1);
  const indexStart = Math.floor((selectedDay - 1) / 7) * 7;
  const [currentMonth, setCurrentMonth] = useState(monthsFr[0].name);
  const [currentMonthDays,setCurrentMonthDays]=useState(monthsFr[0].nbDays)

  // function prevDay() {
  //   let calculNext = selectedDay;
  //   calculNext -= 1;
  //   setSelectedDay(calculNext);
  // }

  // function nextDay() {
  //   let calculNext = selectedDay;
  //   calculNext += 1;
  //   setSelectedDay(calculNext);
  // }

  function handleClick(day) {
    if (selectedDay !== day) {
      setSelectedDay(jours[day]);
    }
  }

  function prevDay() {
    let calculatedDay = selectedDay > 1 ? selectedDay - 1 : 31;
    setSelectedDay(calculatedDay);
     if (calculatedDay === 31) {
       const currentMonthIndex = monthsFr.findIndex(
         (month) => month.name === currentMonth
       );
       const prevMonthIndex = currentMonthIndex - 1;
       setCurrentMonth(monthsFr[prevMonthIndex].name);
       setCurrentMonthDays(monthsFr[prevMonthIndex].nbDays)
     }
  }

  function nextDay() {
    let calculatedDay = selectedDay < 31 ? selectedDay + 1 : 1;
    setSelectedDay(calculatedDay);
    if (calculatedDay === 1) {
      const currentMonthIndex = monthsFr.findIndex(
        (month) => month.name === currentMonth
      );
      const nextMonthIndex = (currentMonthIndex + 1) ;
      setCurrentMonth(monthsFr[nextMonthIndex].name);
       setCurrentMonthDays(monthsFr[nextMonthIndex].nbDays);
    }
  }

  return (
    <div>
      <h1>{currentMonth}</h1>
      <table>
        <thead>
          <th rowSpan='2'>
            {' '}
            {/* <button type='button' disabled={selectedDay <= 1} onClick={prevDay}> */}
            <button type='button' onClick={prevDay}>
              {'<<'}
            </button>
          </th>
          <th colSpan={currentMonthDays}>
            {' '}
            <tr>{WeekDaysCases && <WeekDaysCases />}</tr>
          </th>

          <th rowSpan='2'>
            {/* <button
              type='button'
              disabled={selectedDay >= jours.length}
              onClick={nextDay}
            > */}
            <button type='button' onClick={nextDay}>
              {'>>'}
            </button>
          </th>

          <tr>
            {jours.slice(indexStart, indexStart + 7).map((jour, i) => (
              <th
                key={i}
                className={jour}
                style={{
                  backgroundColor: jour === selectedDay ? 'blue' : null,
                }}
                onClick={() => handleClick(i)}
              >
                <span>{jour}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, index) => (
            <tr key={index}>
              <td className='tableHour'>{hour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GrilleSdp;

GrilleSdp.propTypes = {
  english: PropTypes.bool,
  WeekDaysCases: PropTypes.elementType,
  value: PropTypes.string,
};
