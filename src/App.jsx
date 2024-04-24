import { useState } from 'react';
import SaisonImg from './components/saison_img/SaisonImg';
import InputDate from './components/inputs/InputDate';
import './App.css';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from './components/calendarCases/CalendarCases';
import Grille from './components/grille/Grille';
import GrilleWeek from './components/grille/Grille';
import DayGrille from './components/grille/GrilleDay';
// import GridCalendar from './components/gridCalendar/GridCalendar.jsx';

  
  function App(width) {
    const currentDate = new Date();
    const [date, setDate] = useState(currentDate);
    return (
    <>
      <div>
        <InputDate value={date} setValue={setDate}
         height= "40px"
         width= "30%"
         background= "white"
         color= "green"
         fontFamily= "Arial" 
         border= "3px solid grey"
         borderRadius= "5px"
        />  
      </div>

      <WeekDaysCases
        color='yellow'
        backgroundColor='black'
        fontFamily='roboto'
        english
        width={width + ' px'}
      />
      <CalendarCases
        language='fr'
        color='red'
        fontFamily='Roboto'
        backgroundColor='white'
        height='500px'
        width='500px'
      />
      {/* <>
      <h1>Daily Grille</h1>
          <Grille mode="daily" />
          <h1>Weekly Grille</h1>
          <Grille mode="weekly" />
      </> */}
        <SaisonImg date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`} width= "30%"/>
    
    <div>
    <div className="app">
      <h1>Day Grille</h1>
      <DayGrille />
    </div>

    <div className="app">
      <h1>GrilleWeek</h1>
      <GrilleWeek /> 
    </div>

    </div>
    </>
    
  );
}

export default App;
