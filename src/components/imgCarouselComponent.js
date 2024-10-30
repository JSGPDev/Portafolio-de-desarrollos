import React from "react";
import { useState } from "react";

import ImageComponent from "./imgComponent";

const ImageCarouselComponent = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    console.log(currentImageIndex);

    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    console.log(currentImageIndex);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <ImageComponent
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        position="top-center"
        size="big-size"
        radius="large-radius"
      />
      <div className="carousel-inputs">
        <span className={"arrow arrow-left"} onClick={prevImage}></span>
        <span className={"dot"}></span>
        <span className={"arrow arrow-right"} onClick={nextImage}></span>
      </div>
    </>
  );
};

export default ImageCarouselComponent;
