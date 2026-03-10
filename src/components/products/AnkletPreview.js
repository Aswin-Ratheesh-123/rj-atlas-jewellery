import React from "react";
import "./AnkletPreview.css";

import a1 from "../assets/bangle1.jpg";
import a2 from "../assets/bangle1.jpg";
import a3 from "../assets/bangle1.jpg";
import a4 from "../assets/bangle1.jpg";

function AnkletPreview() {

    const anklets = [
        {
            name: "Traditional Silver",
            rating: "4.4",
            oldPrice: "₹18,000",
            price: "₹15,500",
            image: a1
        },
        {
            name: "Designer Gold Anklet",
            rating: "4.6",
            oldPrice: "₹35,000",
            price: "₹29,000",
            image: a2
        },
        {
            name: "Temple Style Anklet",
            rating: "4.3",
            oldPrice: "₹22,000",
            price: "₹18,500",
            image: a3
        },
        {
            name: "Elegant Daily Wear",
            rating: "4.2",
            oldPrice: "₹14,000",
            price: "₹11,800",
            image: a4
        }
    ];

    return (

        <section className="anklet-preview">

            <div className="container">

                <div className="preview-header">

                    <h2>Anklets For You</h2>

                    <button className="preview-arrow">
                        →
                    </button>

                </div>

                <div className="anklet-grid">

                    {anklets.map((item, index) => (

                        <div className="anklet-card" key={index}>

                            <div className="anklet-image">

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

export default AnkletPreview;