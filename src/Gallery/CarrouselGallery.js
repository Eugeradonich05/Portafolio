import { useRef, useState, useEffect } from "react";
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
  const trackRef = useRef(null);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    const image = track?.children[index];
    if (image) {
      track.scrollTo({
        left: image.offsetLeft - 20, // 20 por el gap
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const children = Array.from(track.children);
      const scrollLeft = track.scrollLeft;
      const center = scrollLeft + track.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(center - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.imageTrack} ref={trackRef}>
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
