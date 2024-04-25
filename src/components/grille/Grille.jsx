import {useState} from 'react';
import PropTypes from "prop-types";
import GridDay from './GrilleDay';
import GridWek from "./GridWek";
import './grille.css';
import Btn from "../btns/Btn";

function Grille({value, setValue})
  {
  const [grid, setGrid] = useState("day")
  return (
    <div>
      <div className='divAction'>
        <Btn onClick={() => setGrid("day")} 
             background={grid == "day" ? "#00012e" : "#fff"} 
             color={grid == "day" ? "#fff" : "#00012e"}
             fontSize={35}
             padding='7px 30px'
             border='1px solid #00012e'
        >
          Day
        </Btn>
        <Btn onClick={() => setGrid("week")} 
             background={grid == "week" ? "#00012e" : "#fff"} 
             color={grid == "week" ? "#fff" : "#00012e"}
             fontSize={35}
             padding='10px 20px'
             border='1px solid #00012e'
        >
          Week
        </Btn>
      </div>
      {grid === "day" ?
      <GridDay value={value} setValue={setValue} />
      :
      <GridWek value={value} setValue={setValue}  />
      }
</div>
)
}
Grille.propTypes = {
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
    setValue: PropTypes.func.isRequired,
}

export default Grille