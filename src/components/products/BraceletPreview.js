import React from "react";
import "./BraceletPreview.css";

import br1 from "../assets/bangle1.jpg";
import br2 from "../assets/bangle1.jpg";
import br3 from "../assets/bangle1.jpg";
import br4 from "../assets/bangle1.jpg";

function BraceletPreview() {

    const bracelets = [
        {
            name: "Classic Gold Bracelet",
            rating: "4.3",
            oldPrice: "₹65,000",
            price: "₹55,000",
            image: br1
        },
        {
            name: "Diamond Chain Bracelet",
            rating: "4.6",
            oldPrice: "₹85,000",
            price: "₹72,000",
            image: br2
        },
        {
            name: "Temple Design Bracelet",
            rating: "4.2",
            oldPrice: "₹55,000",
            price: "₹47,000",
            image: br3
        },
        {
            name: "Elegant Daily Wear",
            rating: "4.4",
            oldPrice: "₹45,000",
            price: "₹38,000",
            image: br4
        }
    ];

    return (

        <section className="bracelet-preview">

            <div className="container">

                <div className="preview-header">

                    <h2>Bracelets For You</h2>

                    <button className="preview-arrow">
                        →
                    </button>

                </div>

                <div className="bracelet-grid">

                    {bracelets.map((item, index) => (

                        <div className="bracelet-card" key={index}>

                            <div className="bracelet-image">

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

export default BraceletPreview;