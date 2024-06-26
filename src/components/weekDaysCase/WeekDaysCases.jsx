import './WeekDaysCases.css';

import PropTypes from 'prop-types';
import { days, daysFr } from '../../services/weekDays';
import { Themes } from '../../services/themes';

/** Le composant WeekDays permet d'afficher les jours de la semaine */
export function WeekDaysCases({
  color,
  backgroundColor,
  fontFamily,
  english,
  width,
  theme = "Default",
}) {
  const selectedTheme = Themes[theme] || null;
  const selectedLanguage = english ? days : daysFr;

  return (
    <div className='wrapper-days'>
      {selectedLanguage.map((days, i) => (
        <div
          key={i}
          style={
            selectedTheme
              ? {
                color: color ? color : selectedTheme.color,
                backgroundColor: backgroundColor
                  ? backgroundColor
                  : selectedTheme.backgroundColor,
                fontFamily: fontFamily
                  ? fontFamily
                  : selectedTheme.fontFamily,
                width,
              }
              : {
                color:color ? color:Themes.Default.color,
                  backgroundColor:backgroundColor? backgroundColor: Themes.Default.backgroundColor,
                  fontFamily : fontFamily ? fontFamily :Themes.Default.fontFamily,
                  english,
                  width,
                }
          }
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

  theme: PropTypes.string,
};