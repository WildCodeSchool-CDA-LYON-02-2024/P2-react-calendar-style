import PropTypes from "prop-types";
import  {useState} from 'react';
import './grille.css';

import GridDay from './GrilleDay';
import GridCalendar from '../gridCalendar/GridCalendar';

function Grille({value, setValue}) {
  const [grid, setGrid] = useState("day")

  const styleActive = (val) => {
    if(grid != val){
     return {background: 'yellow', color: '#00012e'}
    }else {
      return {}
    }
  }
  return (
    <div>
      <div className='divAction'>
        <button 
             className='btnAction' 
             onClick={() => setGrid("day")}
             style={styleActive("day")}
        >
              Day
        </button>
        <button    
             className='btnAction' 
             onClick={() => setGrid("week")}
             style={styleActive("week")}
        >
             Week
        </button>
      </div>
      {grid === "day" ?
      <GridDay value={value} setValue={setValue} />
      :
      <GridCalendar value={value} setValue={setValue}  />
      }
</div>
)
}

Grille.propTypes = {
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
    setValue: PropTypes.func.isRequired,
}

export default Grille