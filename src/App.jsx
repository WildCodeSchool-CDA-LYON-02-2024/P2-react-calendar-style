import { CalendarCases } from "./components/calendarCases/CalendarCases";
import { useState } from "react";

export default function App() {
  const [selectedDatesArray, setSelectedDatesArray] = useState([]);
  const [reservationDate, setReservationDate] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedDateToConfirm, setSelectedDateToConfirm] = useState(null);

  const handleBooking = (date) => {
    setSelectedDateToConfirm(date);
    setIsConfirmationOpen(true);
  };

  const confirmReservation = () => {
    setReservationDate(selectedDateToConfirm);
    setIsConfirmationOpen(false);
  };

  const cancelReservation = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      <CalendarCases
        selectedDatesArray={selectedDatesArray}
        setSelectedDatesArray={setSelectedDatesArray}
        language="fr"
        color="black"
        fontFamily="Arial"
        backgroundColor="white"
        onDateClick={handleBooking}
      />
      <div>
        {selectedDatesArray &&
          selectedDatesArray.map((date, index) => (
            <span key={index}>
              {new Date(date).toLocaleDateString("fr-FR")}
            </span>
          ))}
        <div>
          {reservationDate && (
            <div>
              Vous avez réservé pour la date :{" "}
              {reservationDate.toLocaleDateString("fr-FR")}
            </div>
          )}
        </div>
      </div>

      {isConfirmationOpen && (
        <div className="confirmation-modal">
          <p>Voulez-vous confirmer la réservation pour la date :</p>
          <p>{selectedDateToConfirm.toLocaleDateString("fr-FR")}</p>
          <button onClick={confirmReservation}>Confirmer</button>
          <button onClick={cancelReservation}>Annuler</button>
        </div>
      )}
    </>
  );
}

