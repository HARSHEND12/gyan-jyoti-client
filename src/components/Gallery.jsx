import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Gallery.css";

const images = [
  "./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg",
];

const Gallery = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      gsap.from(img, {
        scrollTrigger: img,
        opacity: 1,
        scale: 0.9,
        duration: 1,
        delay: i * 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-images">
        {images.map((src, i) => (
          <img
            src={src}
            key={i+1}
            ref={(el) => (imageRefs.current[i+1] = el)}
            alt={`gallery-${i+1}`}
            className="gallery-img"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
