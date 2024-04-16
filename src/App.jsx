import './App.css';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from './components/calendarCases/CalendarCases';

function App(width) {
  return (
    <>
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
    </>
  );
}

export default App;
