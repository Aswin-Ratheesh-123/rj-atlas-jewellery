import React, { useEffect, useState } from "react";
import "./BanglesPage.css";
import { Link } from "react-router-dom";

function BanglesPage() {

    const [bangles, setBangles] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/products/category/bangles")
            .then(res => res.json())
            .then(data => setBangles(data))
            .catch(err => console.log(err));

    }, []);

    return (

        <section className="bangles-page">

            <div className="container">

                <h1 className="page-title">Gold Bangles Collection</h1>

                <div className="bangles-grid">

                    {bangles.map((item) => (

                        <Link
                            to={`/product/${item._id}`}
                            className="product-link"
                            key={item._id}
                        >

                            <div className="bangle-card">

                                <div className="bangle-image">

                                    <img
                                        src={`http://localhost:5000/uploads/${item.image}`}
                                        alt={item.name}
                                    />

                                    <div className="rating">
                                        4.5 ⭐
                                    </div>

                                </div>

                                <h3>{item.name}</h3>

                                <div className="price">

                                    <span className="old-price">
                                        ₹{item.oldPrice}
                                    </span>

                                    <span className="new-price">
                                        ₹{item.price}
                                    </span>

                                </div>

                                <p className="buy-text">
                                    Buy at ₹{item.price}
                                </p>

                                <button className="cart-btn">
                                    Add to Cart
                                </button>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default BanglesPage;