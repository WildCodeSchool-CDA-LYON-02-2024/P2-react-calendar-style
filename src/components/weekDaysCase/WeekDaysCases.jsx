
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
  /**Les différentes Propriétés de WeekDaysCases */
  /**Couleur de la police */
  color: PropTypes.string,
  /**Couleur de l'arrière-plan */
  backgroundColor: PropTypes.string,
  /**La police */
  fontFamily: PropTypes.string,
 /**La langue */
  english: PropTypes.bool,
};

WeekDaysCases.defaultProps = {
 
  backgroundColor: null,
  color: null,
  english: false,
  fontFamily: null,
};