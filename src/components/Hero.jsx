import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: -100,
      opacity:1,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="hero">
      <h1 ref={textRef} className="hero-title">Gyan Jyoti 2K25</h1>
      <p className="tagline">A Festival of Knowledge and Culture</p>
      <div className="scroll-down">↓ Scroll Down</div>
    </div>
  );
};

export default Hero;
