## | Note : La librairie est toujours en cours de développement.

## 📝 Présentation

**Calendar-Style** est une librairie React **flexible** et **personnalisable** qui permet d'intégrer facilement un calendrier dynamique dans vos applications.<br/><br/> Vous avez le contrôle total sur l'apparence et le comportement du calendrier, ce qui vous permet de l'adapter parfaitement à vos besoins spécifiques.<br/><br/> Avec sa structure modulaire et sa documentation complète, l'intégration de "Calendar-Style" dans vos projets est simple et rapide.

## 📚 Sommaire

- Installation
- Utilisation
- Composants :
  - Description
  - Capture image
  - Props
  - Code

<br/><br/>

## 📦 Installation

Installation en exécutant la commande :

```
npm i react-calendar-style
```

<br/><br/>

## 🚀 Utilisation

Exemple d'utilisation des composants:

```js
import CalendarCases from "./components/calendarCases/CalendarCases";

function App() {
  return (
    <>
      <CalendarCases
        language="fr"
        color="red"
        fontFamily="Roboto"
        backgroundColor="white"
      />
    </>
  );
}
```

<br/>

## ⚒️ Composants

### CalendarCases

<br/>

Cet élément permet d'afficher un calendrier en mois et jour, qui permet de sélectionner une date, nous retournant des données sous format JSON, afin de pouvoir utiliser l'information si besoin.

| Nom de la propriété | Description                                                | Valeur par défaut        | Exemple           |
| ------------------- | ---------------------------------------------------------- | ------------------------ | ----------------- |
| language            | indique si la langue utilisée est l'anglais ou le français | `fr`                     | `"fr"` ou `"eng"` |
| color               | contrôle la couleur du texte                               | couleur thème par défaut | `"black"`         |
| backgroundColor     | contrôle la couleur du fond                                | couleur thème par défaut | `"white"`         |
| fontFamily          | contrôle la police utilisée                                | police thème par défaut  | `"Arial"`         |
| theme               | contrôle le thème                                          | `Default`                | `"Default"`       |

<br/><br/>

![mobile Calendar](./public/img/CalendarCases.png)
<br/><br/>

### Code:

```js
import { useState } from "react";
import CalendarCases from "./components/calendarCases/CalendarCases";

export function CalendarCases({}) {
  const [selectedDatesArray, setSelectedDatesArray] = useState([]);

  return (
    <div className="header">
      <CalendarCases
        selectedDatesArray={selectedDatesArray}
        setSelectedDatesArray={setSelectedDatesArray}
      />
    </div>
  );
}
```

<br/><br/>

### WeekDaysCases

<br/>

Cet élément permet d'afficher les jours de la semaine en français ou en anglais en tenant compte du type de calendrier.
<br/><br/>

| Nom de la propriété | Description                                                | Valeur par défaut        | Exemple     |
| ------------------- | ---------------------------------------------------------- | ------------------------ | ----------- |
| english             | indique si la langue utilisée est l'anglais ou le français | `false`                  | `true`      |
| color               | contrôle la couleur                                        | couleur thème par défaut | `"black"`   |
| backgroundColor     | contrôle la couleur du fond                                | couleur thème par défaut | `"white"`   |
| fontFamily          | contrôle la police utilisée                                | police thème par défaut  | `"Arial"`   |
| theme               | contrôle le thème                                          | `Default`                | `"Default"` |

<br/><br/>
![mobile Calendar](./public/img/WeekDaysCases.png)
<br/><br/>

### Code:

```js
export default function WeekDaysCases({}) {
  return (
    <div className="wrapper-days">
      {english
        ? days.map((days, i) => <div key={i}>{days}</div>)
        : daysFr.map((days, i) => <div key={i}>{days}</div>)}
    </div>
  );
}
```

### InputDate

<br/>

Cet élément permet de créer un champ où l’utilisateur peut saisir une date.
<br/>
Il permet à l’utilisateur de sélectionner facilement une date via un sélecteur de date: Il peut faire une recherche rapide pour acceder aux differents mois et années

<br/><br/>

| Nom de la propriété | Description                                                              | Valeur par défaut        | Exemple      |
| ------------------- | ------------------------------------------------------------------------ | ------------------------ | ------------ |
| language            | indique si la langue utilisée est l'anglais ("eng") ou le français ("fr) | `fr`                     | `"eng"`      |
| color               | contrôle la couleur                                                      | couleur thème par défaut | `"black"`    |
| backgroundColor     | contrôle la couleur du fond                                              | couleur thème par défaut | `"white"`    |
| fontFamily          | contrôle la police utilisée                                              | police thème par défaut  | `"Arial"`    |
| theme               | contrôle le thème                                                        | `Default`                | `"Default"`  |
| height              | contrôle la hauteur                                                      | couleur thème par défaut | `""200px""`  |
| widht               | contrôle la largeur                                                      | largeur thème par défaut | `""200px"`   |
| border              | contrôle la bordure                                                      | bordure thème par défaut | `"1 px S B"` |
| border-Radius       | contrôle de l'inclinaison de la bordure                                  | `Default`                | `"5px"`      |

<br/><br/>

![mobile Calendar](./public/img/InputDate.png)

<br/><br/>

### Code:

```js
function InputDate({}) {
  const handleChange = (e) => {
    setValue(new Date(e.target.value));
  };

  const dateValue =
    value instanceof Date ? value.toISOString().split("T")[0] : value;

  return (
    <div>
      <input
        className="input"
        type="date"
        onChange={(e) => handleChange(e)}
        value={dateValue}
        style={styleElement}
      />
    </div>
  );
}
```

<br/><br/>

### SaisonImg

<br/>
Cet élément permet d'afficher plusieurs images de manière alternée en fonction des saisons.
L'utilisateur a le choix de garder les images déjà prédéfinies ou de choisir ses propres images en important le dossier image dans son composant.

| Nom de la propriété | Description                             | Valeur par défaut        | Exemple      |
| ------------------- | --------------------------------------- | ------------------------ | ------------ |
| height              | contrôle la hauteur                     | couleur thème par défaut | `"400px"`    |
| widht               | contrôle la largeur                     | largeur thème par défaut | `"400px`     |
| border              | contrôle la bordure                     | bordure thème par défaut | `"1 px S B"` |
| border-Radius       | contrôle de l'inclinaison de la bordure | `Default`                | `"5px"`      |
| theme               | contrôle le thème                       | `Default`                | `"Default"`  |
| date                | contrôle de l'image selon les dates     | dates selon les saisons  | `"Hiver"`    |

<br/><br/>

![mobile Calendar](./public/img/SaisonImg.png)

<br/><br/>

### Code:

```js
function SaisonImg({
}) {


  const monthDayFormat = (dateCurrent) => {
    const maDate = new Date(dateCurrent);
    return (maDate?.getMonth() + 1) * 100 + maDate?.getDate();
  };
  const setSaisons = (dateSais) => {
    if (
      monthDayFormat(dateSais) >= monthDayFormat(saisDate.printemt) &&
      monthDayFormat(dateSais) < monthDayFormat(saisDate.ete)
    ) {
      return urlsImg.img1;
    }
    if (
      monthDayFormat(dateSais) >= monthDayFormat(saisDate.ete) &&
      monthDayFormat(dateSais) < monthDayFormat(saisDate.automne)
    ) {
      return urlsImg.img2;
    }

    if (....)
  };
  return (
    <div>
      <Image src={setSaisons(date)} style={styleElement} />
    </div>
  );
}
```

<br/><br/>

### GridDay

<br/>

Cet élément permet d'afficher une journée de la semaine et d'avoir toutes les heures de la journée selectionnée
L'utilisateur a le choix passer d'une journee a une autre en faisant appel au composant Btn.

<br/>

| Nom de la propriété | Description                        | Valeur par défaut        | Exemple      |
| ------------------- | ---------------------------------- | ------------------------ | ------------ |
| height              | contrôle la hauteur                | couleur thème par défaut | `"400px"`    |
| padding             | contrôle la l'espacement interieur | padding thème par défaut | `"5px 20px"` |
| value               | contrôle la date                   | current date             | current date |
| setValue            | contrôle de la date appellee       | get day                  | day selected |

<br/>

![Dessktop Calendar](./public/img/GridDay.png)
<br/>

### Code:

```js
function GrilleDay() {
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="rowCalendar" style={{ height: heigth }}>
      <table className="table">
        <thead>
          <tr>
            <th>
              <Btn
                onClick={prevPage}
                disabled={currentPage === 1}
                padding={padding}
              >
                {"<<"}
              </Btn>
              </th>
          </tr>
        </thead>
      </table>
    </div>
  );
```

### GridWeek

<br/>

Cet élément permet d'afficher les jours de la semaine et toutes les heures.
L'utilisateur a le choix passer d'une semaine a une autre en faisant appel au composant Btn.

<br/><br/>

![Dessktop Calendar](./public/img/GridWeek.png)

<br/>

| Nom de la propriété | Description                        | Valeur par défaut        | Exemple      |
| ------------------- | ---------------------------------- | ------------------------ | ------------ |
| height              | contrôle la hauteur                | couleur thème par défaut | `"400px"`    |
| padding             | contrôle la l'espacement interieur | padding thème par défaut | `"5px 20px"` |
| value               | contrôle la date                   | current date             | current date |
| setValue            | contrôle de la date appellee       | get day                  | day selected |

<br/><br/>

### Code:

```js
function GridCalendar({}) {

  const handleDateClick = (date) => {
    setValue(date);
  };
    return days;
  };
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
  const selectHour = (day, hour) => {
    console.log("day is", day, "heur is ", hour)
  }
  return (
    <div className='rowCalendar' style={{height: heigth}}>
      <div className="monthSelect">
        {value.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
      </div>
      <table className="table" >
  <thead>
    <tr className='thDay'>
        <th></th>
        {days.map((day,index) =>
          <th className='tabledays'  key={index}><span>{day}</span></th>
        )}
    <th></th>
    </tr>
    <tr>
    <th>
      <Btn onClick={prevPage} disabled={currentPage === 1}
           padding={padding}
      >
        {"<<"}
      </Btn>
   )}
```

### Grille

<br/>

Cet élément permet de faire un switch avec le toggle(boutton Day et Week) entre les jours de la semaine et toutes les heures, ainsi que les une une journee avec les heures.
ce composant regroupe plusieurs composnat pour son bon fonctionnement: GridDay, GridWeek et Btn.

<br/>

| Nom de la propriété | Description                  | Valeur par défaut        | Exemple      |
| ------------------- | ---------------------------- | ------------------------ | ------------ |
| height              | contrôle la hauteur          | couleur thème par défaut | `"400px"`    |
| value               | contrôle la date             | current date             | current date |
| setValue            | contrôle de la date appellee | get day                  | day selected |

<br/>

![Desktop Calendar](./public/img/grille.gif)

<br/>

### Code:

```js
function Grille({}) {
  const [grid, setGrid] = useState("day");
  return (
    <div className="colRight" style={{ height: heigth }}>
      <div className="divAction">
        <Btn onClick={() => setGrid("day")}>Day</Btn>
        <Btn onClick={() => setGrid("week")}>Week</Btn>
      </div>
      {grid === "day" ? (
        <GridDay value={value} setValue={setValue} />
      ) : (
        <GridWek value={value} setValue={setValue} />
      )}
    </div>
  );
}
```
