import { useState } from 'react';
import SaisonImg from './components/saison_img/SaisonImg';
import InputDate from './components/inputs/InputDate';

function App() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  return (
    <>
      <div>
        <InputDate value={date} setValue={setDate} />  
        <SaisonImg date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`} />
      </div>
    </>
  );
}

export default App;