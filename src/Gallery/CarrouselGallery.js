import { useRef, useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";


import gall1 from "../imagenes/15/@maggieradonich_ph-12.jpg";
import gall2 from "../imagenes/15/@maggieradonich_ph-21.jpg";
import gall3 from "../imagenes/15/@maggieradonich_ph-3.jpg";


import gall4 from "../imagenes/Producto/by.maggieradonich-12 (3).jpg";
import gall5 from "../imagenes/Producto/by.maggieradonich-13 (2).jpg";
import gall6 from "../imagenes/Producto/by.maggieradonich-14 (2).jpg";


import gall7 from "../imagenes/casamiento/by.maggieradonich-170.jpg";
import gall8 from "../imagenes/casamiento/by.maggieradonich-18.jpg";
import gall9 from "../imagenes/casamiento/by.maggieradonich-17.jpg";


import gall10 from "../imagenes/corpo/by.maggieradonich-55.jpg";
import gall11 from "../imagenes/corpo/by.maggieradonich-28 (2).jpg";
import gall12 from "../imagenes/corpo/by.maggieradonich-41 (2).jpg";


import gall13 from "../imagenes/familias/@maggieradonich_ph-44.jpg";
import gall14 from "../imagenes/familias/@maggieradonich_ph-15.jpg";
import gall15 from "../imagenes/familias/@maggieradonich_ph-19.jpg";

import styles from "./CarrouselGallery.module.css";

const images = [
gall1,gall2,gall3,gall4,gall5,gall6,gall7,gall8,gall9,gall10,gall11,gall12,gall13,gall14,gall15
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
