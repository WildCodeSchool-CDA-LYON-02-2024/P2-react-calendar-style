import { useState } from 'react';
import SaisonImg from './components/saison_img/SaisonImg';
import InputDate from './components/inputs/InputDate';
import './App.css';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from './components/calendarCases/CalendarCases';
import Grille from './components/grille/Grille';
// import GridCalendar from './components/gridCalendar/GridCalendar.jsx';

function App() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate)
 
  return (
    <>
    <div className="app">
      <div className="main">
        <div className="col1">
          <InputDate
            value={date}
            setValue={setDate}
            height='18px'
            width='480px'
            background='white'
            color='green'
            fontFamily='Arial'
            border='3px solid grey'
            borderRadius='5px'
          />
      
          <WeekDaysCases />
          <CalendarCases theme='Standard' />
          <SaisonImg
            date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
            width="480px"
          />
        </div>

        <div className="col2">
           <Grille value={date} setValue={setDate}/>
        </div>

      </div>
      </div>
      </>
  );
}
export default App;
