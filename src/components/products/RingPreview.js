import React from "react";
import "./RingPreview.css";

import r1 from "../assets/bangle1.jpg";
import r2 from "../assets/bangle1.jpg";
import r3 from "../assets/bangle1.jpg";
import r4 from "../assets/bangle1.jpg";

function RingPreview() {

    const rings = [
        {
            name: "Traditional Gold ",
            rating: "4.3",
            oldPrice: "₹45,000",
            price: "₹38,000",
            image: r1
        },
        {
            name: "Diamond Engagement",
            rating: "4.6",
            oldPrice: "₹85,000",
            price: "₹72,000",
            image: r2
        },
        {
            name: "Temple Design Gold",
            rating: "4.2",
            oldPrice: "₹55,000",
            price: "₹47,000",
            image: r3
        },
        {
            name: "Elegant Daily Wear",
            rating: "4.4",
            oldPrice: "₹35,000",
            price: "₹29,000",
            image: r4
        }
    ];

    return (

        <section className="ring-preview">

            <div className="container">

                <div className="preview-header">

                    <h2>Rings For You</h2>

                    <button className="preview-arrow">
                        →
                    </button>

                </div>

                <div className="ring-grid">

                    {rings.map((item, index) => (

                        <div className="ring-card" key={index}>

                            <div className="ring-image">

                                <img src={item.image} alt={item.name} />

                                <div className="rating">
                                    {item.rating} ⭐
                                </div>

                            </div>

                            <h3>{item.name}</h3>

                            <div className="price">

                                <span className="old-price">
                                    {item.oldPrice}
                                </span>

                                <span className="new-price">
                                    {item.price}
                                </span>

                            </div>

                            <p className="buy-text">
                                Buy at {item.price}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default RingPreview;