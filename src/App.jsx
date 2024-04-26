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
        // CalendarDisplay="none"
        // SaisonImgDisplay="none"
        // InputDisplay="none"
        // color="red"
        // border="1px solid green"
        // fontFamily="Roboto"
        // backgroundColor="white"
        />
      </div>
    </>
  );
}

export default App;
