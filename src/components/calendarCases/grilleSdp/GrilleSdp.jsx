
import hours from '../../../services/hours';
import PropTypes from 'prop-types';
import './GrilleSdp.css';
import {useState} from 'react'




function GrilleSdp({ WeekDaysCases }) {
  const jours = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12, 13, 14, 15, 16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const [next, setNext] = useState("")
  
  return (
    <div>
      <table>
        <thead>
       
            <th rowSpan='2'>
              {' '}
              <button>{'<<'}</button>
            </th>
            <th colSpan='7'>{WeekDaysCases && <WeekDaysCases />}</th>

            <th rowSpan='2'>
              <button>{'>>'}</button>
            </th>
          
          <tr>
            {jours.slice(0,7).map((jour, i) => (
              <th key={i}>
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
