import React from "react";
import "./BangleProductPage.css";
import b1 from "../assets/bangle.jpg";

function BangleProductPage() {

    const product = {
        name: "Traditional Gold Bangle",
        rating: "4.4",
        oldPrice: "₹95,000",
        price: "₹85,000",
        image: b1,
        description:
            "Crafted with premium gold and intricate traditional design, this elegant bangle is perfect for weddings, festivals and daily luxury wear.",
        features: [
            "22K Pure Gold",
            "Traditional Handcrafted Design",
            "Perfect for Weddings and Special Occasions",
            "Certified Jewellery",
            "Lightweight & Comfortable"
        ]
    };

    return (


        <section className="product-page">

            <div className="container product-container">

                {/* PRODUCT IMAGE */}

                <div className="product-image">

                    <img src={product.image} alt={product.name} />

                </div>


                {/* PRODUCT DETAILS */}

                <div className="product-details">

                    <h1>{product.name}</h1>

                    <div className="rating">
                        ⭐ {product.rating} Rating
                    </div>

                    <div className="price-section">

                        <span className="old-price">
                            {product.oldPrice}
                        </span>

                        <span className="new-price">
                            {product.price}
                        </span>

                    </div>

                    <p className="product-description">
                        {product.description}
                    </p>

                    <h3>Product Features</h3>

                    <ul className="features">

                        {product.features.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                    </ul>

                    <button className="add-cart-btn">
                        Add to Cart
                    </button>

                </div>

            </div>

        </section>

    );

}

export default BangleProductPage;