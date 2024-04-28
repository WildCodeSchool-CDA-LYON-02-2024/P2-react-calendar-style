// import { useState } from 'react';
// import SaisonImg from './components/saison_img/SaisonImg';
// import InputDate from './components/inputs/InputDate';
import "./App.css";
// import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from "./components/calendarCases/CalendarCases";
// import GrilleWeek from './components/grille/Grille';
// import DayGrille from './components/grille/GrilleDay';
// import GridCalendar from './components/gridCalendar/GridCalendar.jsx';

function App() {
  // const currentDate = new Date();
  // const [date, setDate] = useState(currentDate);
  return (
    <>
      <div className="app">
        {/* <h1>GrilleWeek</h1>
      <GrilleWeek /> 
      <DayGrille/> */}

        {/* <InputDate
          value={date}
          setValue={setDate}
          height='40px'
          width='30%'
          background='white'
          color='green'
          fontFamily='Arial'
          border='3px solid grey'
          borderRadius='5px'
        /> */}
        {/*       
      <WeekDaysCases /> */}
        <CalendarCases theme="Standard" />
        {/* <SaisonImg
        date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
        width='30%'
      /> */}
      </div>
    </>
  );
}

export default App;
