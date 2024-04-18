import "./WeekDaysCases.css";

import PropTypes from "prop-types";
import { days, daysFr } from "../../services/weekDays";
import { Themes } from "../../services/themes";

/** Le composant WeekDays permet d'afficher les jours de la semaine */
export default function WeekDaysCases({
  color,
  backgroundColor,
  fontFamily,
  english,
  width,
  standard,
  modern,
}) {
  return (
    <div className="wrapper-days">
      {english
        ? days.map((days, i) => (
            <div
              key={i}
              style={
                standard
                  ? {
                      color: Themes.Standard.color,
                      backgroundColor: Themes.Standard.backgroundColor,
                      fontFamily: Themes.Standard.fontFamily,
                    }
                  : modern
                    ? {
                        color: Themes.Modern.color,
                        backgroundColor: Themes.Modern.backgroundColor,
                        fontFamily: Themes.Modern.fontFamily,
                      }
                    : {
                        color,
                        backgroundColor,
                        fontFamily,
                        english,
                        width,
                      }
              }
              // style={{

              // }}
            >
              {days}
            </div>
          ))
        : daysFr.map((days, i) => (
            <div
            key={i}
            style={
              standard
                ? {
                  color: Themes.Standard.color,
                  backgroundColor: Themes.Standard.backgroundColor,
                  fontFamily: Themes.Standard.fontFamily,
                }
                : modern
                  ? {
                    color: Themes.Modern.color,
                    backgroundColor: Themes.Modern.backgroundColor,
                    fontFamily: Themes.Modern.fontFamily,
                  }
                  : {
                    color,
                    backgroundColor,
                    fontFamily,
                    english,
                    width,
                  }}
            >
              {days}
            </div>
          ))}
    </div>
  );
}

WeekDaysCases.propTypes = {
  /** Les différentes Propriétés de WeekDaysCases */
  /** Couleur de la police */
  color: PropTypes.string,
  /** Couleur de l'arrière-plan */
  backgroundColor: PropTypes.string,
  /** La police */
  fontFamily: PropTypes.string,
  /** La langue */
  english: PropTypes.bool,
  /** La largeur */
  width: PropTypes.number,
  standard: PropTypes.bool,
  modern: PropTypes.bool,
};

WeekDaysCases.defaultProps = {
  backgroundColor: "black",
  color: "white",
  english: false,
  fontFamily: "Roboto",
  width: 60,
};
