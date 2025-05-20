import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import imagen1 from "../imagenes/imagen1.webp";
import imagen2 from "../imagenes/imagen2.webp";
import imagen3 from "../imagenes/imagen3.webp";
import imagen4 from "../imagenes/imagen4.webp";
import styles from "./CarrouselGallery.module.css";

const images = [
  imagen1, imagen2, imagen3, imagen4,
  imagen1, imagen2, imagen3, imagen4,
  imagen1, imagen2, imagen3, imagen4,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.imageTrack}
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`, // 3 images visible
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.arrowButton}>
          <MoveLeft size={24} />
        </button>

        <span className={styles.counter}>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>

        <button onClick={next} className={styles.arrowButton}>
          <MoveRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
 