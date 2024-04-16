import './App.css';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';
import CalendarCases from './components/calendarCases/CalendarCases';
import themes from './services/themes.js';

function App(width) {
  return (
    <>
      <WeekDaysCases
        color= {themes[0].color}
        backgroundColor={themes[0].backgroundColor}
        fontFamily={themes[0].fontFamily}
        english
        width={width + ' px'}
      />
      <CalendarCases
        // language='fr'
        // color='red'
        // fontFamily='Roboto'
        // backgroundColor='red'
        // height='500px'
        // width='500px'
      />
    </>
  );
}

export default App;
