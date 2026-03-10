import React from "react";
import "./NecklacePreview.css";

import n1 from "../assets/bangle1.jpg";
import n2 from "../assets/bangle1.jpg";
import n3 from "../assets/bangle1.jpg";
import n4 from "../assets/bangle1.jpg";

function NecklacePreview() {

    const necklaces = [
        {
            name: "Traditional Gold ",
            rating: "4.5",
            oldPrice: "₹1,85,000",
            price: "₹1,60,000",
            image: n1
        },
        {
            name: "Diamond Bridal ",
            rating: "4.7",
            oldPrice: "₹2,45,000",
            price: "₹2,10,000",
            image: n2
        },
        {
            name: "Temple Design ",
            rating: "4.4",
            oldPrice: "₹1,75,000",
            price: "₹1,50,000",
            image: n3
        },
        {
            name: "Elegant Daily Wear ",
            rating: "4.3",
            oldPrice: "₹95,000",
            price: "₹82,000",
            image: n4
        }
    ];

    return (

        <section className="necklace-preview">

            <div className="container">

                <div className="preview-header">

                    <h2>Necklaces For You</h2>

                    <button className="preview-arrow">
                        →
                    </button>

                </div>

                <div className="necklace-grid">

                    {necklaces.map((item, index) => (

                        <div className="necklace-card" key={index}>

                            <div className="necklace-image">

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

export default NecklacePreview;