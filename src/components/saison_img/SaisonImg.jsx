import PropTypes from "prop-types";
import Image from "./Image";
import "./image.css";

function SaisonImg(props) {
  const { date } = props;
  
  const sais1 = "2024-03-01";
  const sais2 = "2024-06-01";
  const sais3 = "2024-09-01";
  const sais4 = "2024-12-01";

  const img1 = "printemps.jpg";
  const img2 = "ete.jpg";
  const img3 = "automne.jpg";
  const img4 = "hiver.jpg";

  const monthDayFormat = (dateCurrent) => {
    const maDate = new Date(dateCurrent);
    return (maDate?.getMonth() + 1) * 100 + maDate?.getDate();
  };

  const setSaisons = (dateSais) => {
    if (
      monthDayFormat(dateSais) >= monthDayFormat(sais1) &&
      monthDayFormat(dateSais) < monthDayFormat(sais2)
    ) {
      return img1;
    }
    if (
      monthDayFormat(dateSais) >= monthDayFormat(sais2) &&
      monthDayFormat(dateSais) < monthDayFormat(sais3)
    ) {
      return img2;
    }

    if (
      monthDayFormat(dateSais) >= monthDayFormat(sais3) &&
      monthDayFormat(dateSais) < monthDayFormat(sais4)
    ) {
      return img3;
    }

    if (monthDayFormat(dateSais) >= monthDayFormat(sais4)) {
      return img4;
    }
    return img4;
  };

  return (
    <div>
      <Image src={setSaisons(date)} />
    </div>
  );
}

SaisonImg.propTypes = {
    date: PropTypes.string.isRequired,
  };

export default SaisonImg;
