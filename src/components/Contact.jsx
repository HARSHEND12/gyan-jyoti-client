import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Contact.css";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(contactRef.current, {
      scrollTrigger: contactRef.current,
      y: 80,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:gyanjyoti@college.edu">gyanjyoti@college.edu</a></p>
      <p>Phone: +91 79******** </p>
      <div className="socials">
        <a href="#" target="_blank" rel="noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </section>
  );
};

export default Contact;
