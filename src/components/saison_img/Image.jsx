import PropTypes from "prop-types";
import "./image.css";

export function Image({ src, style }) {
  return (
    <img
      src={"/src/assets/imageSaisonTest/" + src}
      className="img"
      alt="Saison"
      style={style}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
};

