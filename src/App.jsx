import { useState } from "react";
import { useEffect } from 'react'
import SaisonImg from './components/saison_img/SaisonImg';
import InputDate from './components/inputs/InputDate';
import "./App.css";
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from "./components/calendarCases/CalendarCases";
import Grille from './components/grille/Grille';
import DarkModeToggle from './components/darkMode/DarkModeToggle.jsx';

function App() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark-mode' : 'light-mode';
  }, [dark]);

  const [selectedDatesArray, setSelectedDatesArray] = useState([]);
  return (
    <>

    <div className="app">
    
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
      
      <WeekDaysCases />
      <CalendarCases
          selectedDatesArray={selectedDatesArray}
          setSelectedDatesArray={setSelectedDatesArray}
        />
      <SaisonImg
        date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
        width='30%'
      />

      <>
      <Grille value={date} setValue={setDate}/>
      <DarkModeToggle value={dark} setValue={setDark} />
      </>

      </div>
      </>
  );
}

export default App;
