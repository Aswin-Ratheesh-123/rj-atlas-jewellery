import React from "react";
import "./Contact.css";

function Contact() {

    return (

        <section className="contact">

            {/* HERO */}

            <div className="contact-hero">

                <h1>Contact Us</h1>

                <p>
                    We’re here to help you with anything you need
                </p>

            </div>

            {/* CONTENT */}

            <div className="container contact-container">

                {/* CONTACT FORM */}

                <div className="contact-form">

                    <h2>Send a Message</h2>

                    <form>

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

                {/* CONTACT INFO */}

                <div className="contact-info">

                    <h2>Get in Touch</h2>

                    <div className="info-item">
                        <h4>📍 Location</h4>
                        <p>Kerala, India</p>
                    </div>

                    <div className="info-item">
                        <h4>📞 Phone</h4>
                        <p>+91 98765 43210</p>
                    </div>

                    <div className="info-item">
                        <h4>✉️ Email</h4>
                        <p>rjatlasjewellery@gmail.com</p>
                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;