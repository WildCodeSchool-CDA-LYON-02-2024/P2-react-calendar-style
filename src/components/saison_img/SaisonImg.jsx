import PropTypes from "prop-types";
import Image from "./Image";
import "./image.css";

import { saisDate, urlsImg } from "../../services/Saison"

// function SaisonImg(props) {
//   const { date } = props;
  
function SaisonImg({
  date, 
  height, 
  width,
  border, 
  borderRadius,
}) {

  const styleElement = {
    width: width,
    height : height,
    border: border,
    borderRadius: borderRadius
  }
 
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

    if (
      monthDayFormat(dateSais) >= monthDayFormat(saisDate.automne) &&
      monthDayFormat(dateSais) < monthDayFormat(saisDate.hiver)
    ) {
      return urlsImg.img3;
    }

    if (monthDayFormat(dateSais) >= monthDayFormat(saisDate.hiver)) {
      return urlsImg.img4;
    }
    return urlsImg.img4;
  };

  return (
    <div>
      <Image src={setSaisons(date)} style={styleElement} />
    </div>
  );
}

SaisonImg.propTypes = {
    date: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired, 
    width: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired,
    borderRadius: PropTypes.number.isRequired,
  };

  SaisonImg.defaultProps = {
    date: new Date(),
    height: "360px", 
    width: "480px",
    border: "5px solid grey",
    borderRadius: "10px",
  };

export default SaisonImg;
