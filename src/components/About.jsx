import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: aboutRef.current,
      y: 100,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <h2>About Gyan Jyoti</h2>
      <p>
        Gyan Jyoti is the annual technical and cultural festival of our college, celebrating the fusion of innovation and tradition. From tech talks to dance battles, it's a showcase of talent, intellect, and spirit.
      </p>
    </section>
  );
};

export default About;
