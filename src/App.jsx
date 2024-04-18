import { useState } from 'react';
import SaisonImg from './components/saison_img/SaisonImg';
import InputDate from './components/inputs/InputDate';
import './App.css';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from './components/calendarCases/CalendarCases';

function App() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  return (
    <>
      <div>
        <InputDate
          value={date}
          setValue={setDate}
          height='40px'
          width='30%'
          background='white'
          color='green'
          fontFamily='Arial'
          border='3px solid grey'
          borderRadius='5px'
        />
      </div>
      <WeekDaysCases modern />
      <CalendarCases theme='Standard' />
      <SaisonImg
        date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
        width='30%'
      />
    </>
  );
}

export default App;
