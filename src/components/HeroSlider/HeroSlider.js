import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

import FeaturedProducts from "../BestSellers/BestSellers";
import BestSellers from "../FeaturedProducts/FeaturedProducts";

import d1 from "../assets/desktop1.png";
import d2 from "../assets/desktop2.png";
import d3 from "../assets/desktop3.png";

import m1 from "../assets/mobile1.png";
import m2 from "../assets/mobile2.png";
import m3 from "../assets/mobile3.png";

function HomeSlider() {

  const desktopSlides = [d1, d2, d3];
  const mobileSlides = [m1, m2, m3];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* Detect screen resize */

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  /* Auto slide */

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);

  }, [slides.length]);

  return (

    <section className="home">

      {/* HERO CAROUSEL */}

      <div className="carousel-container">

        {slides.map((slide, index) => (

          <div
            key={index}
            className={`fade-slide ${current === index ? "active" : ""}`}
          >

            <img src={slide} alt="Jewellery Banner" />

            <div className="hero-overlay">

              <button className="hero-btn">
                Shop Now
              </button>

            </div>

          </div>

        ))}

        {/* DOTS */}

        <div className="dots">

          {slides.map((_, index) => (

            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

      </div>

      {/* OTHER SECTIONS */}

      

    </section>

  );

}

export default HomeSlider;