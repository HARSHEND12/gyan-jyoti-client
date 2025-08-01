import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Events.css";

const events = [
  { title: "Tech Expo", desc: "Showcase of student innovation." },
  { title: "Cultural Night", desc: "Dance, drama, and music galore!" },
  { title: "Quizathon", desc: "Battle of brains across colleges." },
];

const Events = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: card,
        opacity: 1,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section className="events-section" id="events">
      <h2>Our Events</h2>
      <div className="event-cards">
        {events.map((e, i) => (
          <div
            className="event-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
