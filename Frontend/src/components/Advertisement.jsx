import { useEffect, useState } from "react";

import "./Advertisement.css";

function Advertisement() {
  const images = [
    "certificate.svg",
    "eligibility.svg",
    "notification.svg",
    "recognised.svg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === images.length) {
        setIndex(() => 0);
        setCurrentImage(images[0]);
      } else {
        setCurrentImage(images[index]);
        setIndex((index) => index + 1);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImage, index, images]);

  return (
    <div className="advertisement-container">
      <img
        src={currentImage}
        className="img-fluid adv-images"
        alt="Responsive image"
      />
    </div>
  );
}

export default Advertisement;
