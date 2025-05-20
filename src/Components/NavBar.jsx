import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('Home')
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 })

  const linkRefs = {
    Home: useRef(null),
    About: useRef(null),
    Gallery: useRef(null),
    Contact: useRef(null),
  }

  useEffect(() => {
    const activeElement = linkRefs[activeLink]?.current
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setBarStyle({ left: offsetLeft, width: offsetWidth })
    }
  }, [activeLink])

  return (  
<section className={styles.navbarContainer}>
  
  <nav className={styles.navbar}>
      <div className={styles.linkContainer}>
        {['Home', 'About', 'Gallery', 'Contact'].map((link) => (
          <Link
          key={link}
            to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
            ref={linkRefs[link]}
            className={`${styles.navLink} ${activeLink === link ? styles.navLinkActive : ''}`}
            onClick={() => setActiveLink(link)}
            >
            {link}
          </Link>
        ))}
        {/* Barra de luz dinámica */}
        <div
          className={styles.lightBar}
          style={{
            left: barStyle.left,
            width: barStyle.width,
          }}
          />
      </div>
    </nav>
          </section>
  )
}
