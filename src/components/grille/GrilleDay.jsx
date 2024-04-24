import {useState} from 'react'
import {useEffect} from "react"
import PropTypes from "prop-types";
import "../gridCalendar/gridCalendar.css"
import { monthsFr } from '../../services/months';
import { daysFr } from '../../services/weekDays';
 
function GrilleDay({value, setValue}) {

    // const days = ["samedi", "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi"]
    const hours = ["00h00","01h00","02h00","03h00","04h00","05h00","06h00","07h00","08h00","09h00","10h00","11h00","12h00","13h00","14h00","15h00","16h00","17h00","18h00","19h00","20h00","21h00","22h00","23h00"]
    // const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;

    useEffect(() => {
      const pageCurr = value?.getDate() / itemsPerPage
      setCurrentPage(Math.ceil(pageCurr));
    }, [])
  
    const handleDateClick = (date) => {
      setValue(date);
    };
  
    const getDaysInMonth = (month, year) => {
      const date = new Date(year, month, 1);
      const days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };
  
  const daysInMonth = getDaysInMonth(value?.getMonth(), value?.getFullYear());

    
   
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, daysInMonth?.length);
  
    
  const daysItems = daysInMonth?.slice(startIndex, endIndex);
  
  

    const nextPage = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };
  
    
    const prevPage = () => {
      setCurrentPage(prevPage => prevPage - 1);
    };
  
    const selectHour = (day, hour) => {
      console.log("day is", day, "heur is ", hour)
    }

    const getOnDay = (day) => {

    let jour = daysFr[day?.getDay()];
    let moisEnLettres = monthsFr[day?.getMonth()];
    let annee = day?.getFullYear();
    return `${jour} ${day.getDate()} ${moisEnLettres} ${annee}`;
    }
    return (
      <div className='row'>
        <table className="table">
         <thead>
          <tr>
           <th>
             <button className='btn' onClick={prevPage} disabled={currentPage === 1}>
               {"<<"}
             </button>
           </th>
          {daysItems.map((day,i) => 
           <th 
               key={i} 
               className={"thDay " + (day.getDate() == value?.getDate() ? "daySelected" : "")}
               onClick={() => handleDateClick(day)}
               >
               <span >{getOnDay(day)}</span>
           </th>
          )}
           <th>
             <button className='btn' onClick={nextPage} disabled={endIndex >= daysInMonth.length} >
               {">>"}
             </button>
          </th>
        </tr>
      </thead>
      <tbody>
       {hours.map((hour, index) =>
         <tr key={index}>
         <td className='tableHour'>{hour}</td>
        {daysItems.map((day,i) => 
          <td 
               className={day.getDate() == value?.getDate() ? "daySelected" : ""}  
               key={i} 
               onClick={() => selectHour(day, hour)}>
           </td>
         )}
    </tr>
     )}
    </tbody>
  </table>
</div>
);
}

GrilleDay.propTypes = {
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
    setValue: PropTypes.func.isRequired
}

export default GrilleDay