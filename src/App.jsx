import { useState } from 'react';
import SaisonImg from './components/saison_img/SaisonImg';
import InputDate from './components/inputs/InputDate';
import './App.css';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from './components/calendarCases/CalendarCases';

  
  function App(width) {
    const currentDate = new Date();
    const [date, setDate] = useState(currentDate);
    return (
    <>
      <div>
        <InputDate value={date} setValue={setDate} />  
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
        <SaisonImg date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`} />
    </>
  );
}

export default App;
