import React from "react";
import "./ChainPreview.css";

import c1 from "../assets/chain1.jpg";
import c2 from "../assets/chain1.jpg";
import c3 from "../assets/chain1.jpg";
import c4 from "../assets/chain1.jpg";

function ChainPreview() {

    const chains = [
        {
            name: "Classic Gold Chain",
            rating: "4.3",
            oldPrice: "₹75,000",
            price: "₹65,000",
            image: c1
        },
        {
            name: "Diamond Link Chain",
            rating: "4.6",
            oldPrice: "₹1,10,000",
            price: "₹95,000",
            image: c2
        },
        {
            name: "Temple Design Chain",
            rating: "4.2",
            oldPrice: "₹85,000",
            price: "₹72,000",
            image: c3
        },
        {
            name: "Elegant Daily Wear Chain",
            rating: "4.4",
            oldPrice: "₹55,000",
            price: "₹48,000",
            image: c4
        }
    ];

    return (

        <section className="chain-preview">

            <div className="container">

                <div className="preview-header">

                    <h2>Chains For You</h2>

                    <button className="preview-arrow">
                        →
                    </button>

                </div>

                <div className="chain-grid">

                    {chains.map((item, index) => (

                        <div className="chain-card" key={index}>

                            <div className="chain-image">

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

export default ChainPreview;