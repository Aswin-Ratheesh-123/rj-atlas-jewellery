import React from "react";
import "./BanglePreview.css"; // reuse same CSS

import e1 from "../assets/bangle1.jpg";
import e2 from "../assets/bangle1.jpg";
import e3 from "../assets/bangle1.jpg";
import e4 from "../assets/bangle1.jpg";

function EarringsPreview() {

    const earrings = [
        {
            name: "Diamond Stud Earrings",
            rating: "4.4",
            oldPrice: "₹45,000",
            price: "₹38,000",
            image: e1
        },
        {
            name: "Traditional Gold Jhumka",
            rating: "4.6",
            oldPrice: "₹55,000",
            price: "₹47,000",
            image: e2
        },
        {
            name: "Pearl Drop Earrings",
            rating: "4.3",
            oldPrice: "₹35,000",
            price: "₹28,000",
            image: e3
        },
        {
            name: "Temple Design Earrings",
            rating: "4.5",
            oldPrice: "₹60,000",
            price: "₹52,000",
            image: e4
        }
    ];

    return (

        <section className="bangle-preview">

            <div className="container">

                <div className="preview-header">

                    <h2>Earrings For You</h2>

                    <button className="preview-arrow">
                        →
                    </button>

                </div>

                <div className="bangle-grid">

                    {earrings.map((item, index) => (

                        <div className="bangle-card" key={index}>

                            <div className="bangle-image">

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

export default EarringsPreview;