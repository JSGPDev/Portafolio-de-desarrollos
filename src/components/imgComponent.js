import PropTypes from "prop-types";

const ImageComponent = ({ position, size, radius, src, alt }) => {
  const imgClassName = `${radius} ${size} ${position}`;

  // Suponiendo que src es el nombre del archivo dentro de la carpeta public/img
  const imageUrl = `${process.env.PUBLIC_URL}/img/${src}`;

  return <img className={imgClassName} src={imageUrl} alt={alt} />;
};

// Definir los tipos de las props
ImageComponent.propTypes = {
  position: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageComponent;
