import PropTypes from "prop-types";

const ImageComponent = ({ position, size, radius, src, alt }) => {
  const imgClassName = `${radius} ${size} ${position}`;
  const fromDrive = src.toLowerCase().includes("drive.google.com");

  // Suponiendo que src es el nombre del archivo dentro de la carpeta public/img
  const imageUrl = src.toLowerCase().includes("https")
    ? src
    : `${process.env.PUBLIC_URL}/img/${src}`;

  return (
    <>
      {fromDrive ? (
        <iframe
          className={imgClassName}
          src={imageUrl}
          title={alt}
          allow="autoplay"
        />
      ) : (
        <img
          className={imgClassName}
          src={`${process.env.PUBLIC_URL}/img/${src}`}
          alt={alt}
        />
      )}
    </>
  );
};

// Definir los tipos de las props
ImageComponent.propTypes = {
  position: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageComponent;
