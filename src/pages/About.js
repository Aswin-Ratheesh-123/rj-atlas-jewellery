import React, { useEffect } from "react";
import "./About.css";

function About() {

    useEffect(() => {

        const elements = document.querySelectorAll(".fade-up");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));

    }, []);

    return (

        <section className="about">

            {/* HERO */}

            <div className="about-hero">

                <h1 className="fade-up">RJ Atlas Jewellery</h1>

                <p className="fade-up">
                    Timeless elegance crafted through precision and passion
                </p>

            </div>

            {/* STORY */}

            <div className="container about-content fade-up">

                <h2>Our Legacy</h2>

                <p>
                    RJ Atlas Jewellery represents a perfect blend of tradition and
                    modern craftsmanship. Each piece we create is designed to reflect
                    elegance, beauty, and lasting value.
                </p>

                <p>
                    Our journey is built on trust, quality, and a commitment to
                    delivering luxury jewellery that speaks for itself.
                </p>

            </div>

            {/* MISSION / VISION */}

            <div className="about-section">

                <div className="container about-grid">

                    <div className="about-card fade-up">
                        <h3>Our Mission</h3>
                        <p>
                            To deliver premium jewellery that reflects elegance,
                            quality, and trust in every piece.
                        </p>
                    </div>

                    <div className="about-card fade-up">
                        <h3>Our Vision</h3>
                        <p>
                            To redefine modern luxury jewellery with innovation
                            and timeless design.
                        </p>
                    </div>

                </div>

            </div>

            {/* WHY US */}

            <div className="container why-us">

                <h2 className="fade-up">Why Choose Us</h2>

                <div className="why-grid">

                    <div className="why-card fade-up">
                        <h4>Premium Craftsmanship</h4>
                        <p>Every detail perfected with precision.</p>
                    </div>

                    <div className="why-card fade-up">
                        <h4>Luxury Designs</h4>
                        <p>Modern elegance with traditional roots.</p>
                    </div>

                    <div className="why-card fade-up">
                        <h4>Trusted Brand</h4>
                        <p>Built on customer trust and quality.</p>
                    </div>

                    <div className="why-card fade-up">
                        <h4>Affordable Luxury</h4>
                        <p>Luxury jewellery made accessible.</p>
                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;