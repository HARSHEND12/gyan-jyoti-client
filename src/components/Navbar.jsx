import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    } else {
      gsap.set(linksRef.current, { opacity: 1, y: -20 });
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo">GyanJyoti</div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {["About", "Events", "Gallery", "Register", "Contact"].map((link, i) => (
          <li key={link} ref={(el) => (linksRef.current[i] = el)}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;