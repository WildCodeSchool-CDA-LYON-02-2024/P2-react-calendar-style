
import PropTypes from "prop-types";
import "./image.css";

function Image({ src }) {
  
  return (
    <img src={"/src/assets/imageSaisonTest/" + src} className="img" alt="Saison" />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image