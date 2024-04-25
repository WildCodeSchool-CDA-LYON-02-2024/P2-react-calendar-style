import hours from '../../../services/hours';
import PropTypes from 'prop-types';
import './GrilleSdp.css';
import { useState } from 'react';

function GrilleSdp({ WeekDaysCases, value }) {
  const jours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let getDate = value.getDate();

  const [currentDay, setCurrentDay] = useState(1);

  // const selectedDay = currentDay !== getDate ? currentDay : getDate;
  // const selectedDay= getDate || currentDay

  console.log(typeof getDate);

  // function prevDay() {
  //   if (selectedDay === getDate) {
  //     setCurrentDay(getDate - 1);
  //   } else {
  //     setCurrentDay(currentDay - 1);
  //   }
  // }
  function prevDay() {
    setCurrentDay(currentDay - 1);
  }

  // function nextDay() {
  //   if (selectedDay === getDate) {
  //     setCurrentDay(getDate + 1);
  //   } else {
  //     setCurrentDay(currentDay + 1);
  //   }
  // }

  function nextDay() {
    setCurrentDay(currentDay + 1);
  }

  return (
    <div>
      <table>
        <thead>
          <th rowSpan='2'>
            {' '}
            <button type='button' onClick={prevDay}>
              {'<<'}
            </button>
          </th>
          <th colSpan='31'>
            {' '}
            <tr>{WeekDaysCases && <WeekDaysCases />}</tr>
          </th>

          <th rowSpan='2'>
            <button type='button' onClick={nextDay}>
              {'>>'}
            </button>
          </th>

          <tr>
            {jours.map((jour, i) => (
              <th
                key={i}
                className={jour}
                style={{
                  backgroundColor: jour === currentDay || jour === getDate ? 'blue' : null,
                }}
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
  value: PropTypes.number,
};
