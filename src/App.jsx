import './App.css';
import WeekDaysCases from './components/weekDaysCase/WeekDaysCases.jsx';

function App(width) {
  return (
    <>
      <WeekDaysCases
        color='yellow'
        backgroundColor='black'
        fontFamily='roboto'
        english
        width={width +" px"}
     
      

      />
    </>
  );
}

export default App;
