import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {navlinks} from './constants'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            {/* LOGO clickable so they will always go home*/}
            <Link to="/">
                <img src="/images/logo-removebg-preview.png" alt="Stebbie Logo" className='logo-img' />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop">
                <ul>
                    {navlinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            {/* If link starts with /, it's a route - use Link. Otherwise it's a hash - use anchor */}
                            {link.startsWith('/') && link !== '/' ? (
                                <Link to={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </Link>
                            ) : link === '/' ? (
                                <Link to="/">
                                    <span>{name}</span>
                                    <span className="underline" />
                                </Link>
                            ) : (
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* RSVP Button */}
            <a href="#rsvp" className='contact-btn group'>
                <div className="inner">
                    <span>RSVP</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar