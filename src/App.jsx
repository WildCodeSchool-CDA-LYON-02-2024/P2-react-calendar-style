import { useState } from 'react';

import InputDate from './components/inputs/InputDate';
import './App.css';

import GrilleSdp from './components/calendarCases/grilleSdp/GrilleSdp.jsx';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';


// import GridCalendar from './components/gridCalendar/GridCalendar.jsx';

function App() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  return (
    <>

    <div className="app">
      <h1>GrilleWeek</h1>

    
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
      
          
        <GrilleSdp english WeekDaysCases={WeekDaysCases} />

    
      
     
   
      </div>
      </>
  );
}

export default App;
