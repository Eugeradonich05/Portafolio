import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBars from './Components/NavBars';
import Hero from './HomePage/Hero';
import Section from './HomePage/Section';
import Section1 from './HomePage/Section1';
import About from './about/HeroAbout';
import Carrousel from './HomePage/Carrousel';
import Contact from './HomePage/Contact';
import Footer from './Components/Footer';
import HeroGallery from './Gallery/HeroGallery';
import CarrouselGallery from './Gallery/CarrouselGallery';
import SectionGallery from './Gallery/SectionGallery';
import Contacto from './Contact/Contacto';
import NavBarContacto from './Contact/NavBarContacto';
import EventDetail from './Gallery/EventDetail';
import Hola from "./HomePage/hola"
function App() {
  return (
    <div className="App">
      {/* Aquí los componentes que querés que estén siempre visibles */}
      <NavBars />
      {/* Acá van tus rutas */}
      <Routes>
     {/*    <Route path="/contact" element={<Contacto />} />
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<HeroGallery />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/about" element={<About />} />
       */}
       <Hola/>
      </Routes>

      {/* Footer también fuera de Routes */}
      <Footer />
    </div>
  );
}

export default App;
