// import './App.css';
// import { useState } from 'react';
import WeekDaysCases from "./components/weekDaysCase/WeekDaysCases.jsx";
import CalendarCases from "./components/calendarCases/CalendarCases";

// function flipTheme(t) {
//     $('link[rel="stylesheet"]').each(function () {
//         if (this.href.indexOf(theme)>=0) {
//             this.href = this.href.replace(theme, t);
//             theme = t;
//         }
//     });
// }

function App() {
  return (
    <>
      <WeekDaysCases
        standard

        // color= {themes[0].color}
        // backgroundColor={themes[0].backgroundColor}
        // fontFamily={themes[0].fontFamily}
        // english
        // width={width + ' px'}
      />
      <CalendarCases
      theme = "Standard"
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
