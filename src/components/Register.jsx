import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Register.css";

const Register = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      scrollTrigger: formRef.current,
      opacity: 1,
      y: 100,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="register-section" id="register">
      <h2>Register Now</h2>
      <form ref={formRef}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Event Name" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Register;
