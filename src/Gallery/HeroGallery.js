import React from 'react';
import styles from './HeroGallery.module.css';
import { Car } from 'lucide-react';
import CarrouselGallery from './CarrouselGallery';
import SectionGallery from './SectionGallery';
import NavBar from '../Components/NavBar';

export default function HeroGallery() {
  return (
    <div>
      {/* <NavBar/> */}
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Explorá lo Desconocido</h1>
      </div>
    </section>
    <CarrouselGallery />
    <SectionGallery />

    </div>
  );
}