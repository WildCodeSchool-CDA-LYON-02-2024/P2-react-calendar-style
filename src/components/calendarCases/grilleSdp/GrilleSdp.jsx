import hours from '../../../services/hours';
import PropTypes from 'prop-types';
import './GrilleSdp.css';
import { useState } from 'react';

function GrilleSdp({ WeekDaysCases }) {
  const jours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  // let getDate = value.getDate();

  const [selectedDay, setSelectedDay] = useState(1);
  const indexStart = Math.floor((selectedDay - 1) / 7) * 7;

 function prevDay() {
     let calculNext = selectedDay;
     calculNext -= 1;
     setSelectedDay(calculNext);
 }
  
  function nextDay() {
    let calculNext = selectedDay;
    calculNext += 1;
    setSelectedDay(calculNext);
  }

  function handleClick(day) {
    setSelectedDay(jours[day]);
  }

  return (
    <div>
      <table>
        <thead>
          <th rowSpan='2'>
            {' '}
            <button type='button' disabled={selectedDay <= 1} onClick={prevDay}>
              {'<<'}
            </button>
          </th>
          <th colSpan='31'>
            {' '}
            <tr>{WeekDaysCases && <WeekDaysCases />}</tr>
          </th>

          <th rowSpan='2'>
            <button
              type='button'
              disabled={selectedDay >= jours.length}
              onClick={nextDay}
            >
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
};
