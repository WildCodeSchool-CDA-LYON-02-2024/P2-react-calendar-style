// import './App.css';
import SideCalendar from "./components/sideCalendar/SideCalendar";
// import GrilleWeek from './components/grille/Grille';
// import DayGrille from './components/grille/GrilleDay';

function App() {
  return (
    <>
      <div className="app">
        {/* <GrilleWeek />
        <DayGrille />
        */}
        <SideCalendar
          color="red"
          // fontFamily="Roboto"
          // backgroundColor="white"
        />
      </div>
    </>
  );
}

export default App;
