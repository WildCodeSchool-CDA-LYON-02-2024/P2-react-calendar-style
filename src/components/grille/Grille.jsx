import {useState} from 'react';
import PropTypes from "prop-types";
import GridDay from './GrilleDay';
import GridWek from "./GrilleWeek";
import './grille.css';
import Btn from "../btns/Btn";
import "./gridCalendar.css"

function Grille({value = new Date(), setValue, heigth = "500px"})
  {
  const [grid, setGrid] = useState("day")
  return (
    <div className='colRight' style={{height: heigth}}>
      <div className='divAction'>
        <Btn onClick={() => setGrid("day")} 
             background={grid == "day" ? "#00012e" : "#fff"} 
             color={grid == "day" ? "#fff" : "#00012e"}
             fontSize={20}
             padding='7px 30px'
             border='1px solid #00012e'
             height='40px'
        >
          Day
        </Btn>
        <Btn onClick={() => setGrid("week")} 
             background={grid == "week" ? "#00012e" : "#fff"} 
             color={grid == "week" ? "#fff" : "#00012e"}
             fontSize={20}
             padding='10px 20px'
             border='1px solid #00012e'
             height='40px'
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
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    setValue: PropTypes.func,
    heigth: PropTypes.string
}

export {Grille}