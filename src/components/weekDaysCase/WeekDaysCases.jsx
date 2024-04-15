
import './WeekDaysCases.css'
import PropTypes from 'prop-types'
import {days,daysFr} from '../../services/weekDays'


export default function WeekDaysCases({color,backgroundColor,fontFamily,english}) {




  
  return (
    <div className='wrapper-days'>
      { english ? (
      days.map((days, i) => (
        <div key={i} style={{ color, backgroundColor, fontFamily, english }}>
          {days}
        </div>
      )))
:(
      daysFr.map((days, i) => (
        <div key={i} style={{ color, backgroundColor, fontFamily }}>
          {days}
        </div>
      )))
    }
    </div>
  );

  
}



WeekDaysCases.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  english: PropTypes.bool,
};