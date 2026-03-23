import React, { useEffect, useState } from "react";
import "./BanglesPage.css"; // reuse same CSS
import { Link } from "react-router-dom";

function AllProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));

    }, []);

    return (

        <section className="bangles-page">

            <div className="container">

                <h1 className="page-title">All Products</h1>

                <div className="bangles-grid">

                    {products.map(product => (

                        <Link
                            to={`/product/${product._id}`}
                            className="product-link"
                            key={product._id}
                        >

                            <div className="bangle-card">

                                <div className="bangle-image">

                                    <img
                                        src={`http://localhost:5000/uploads/${product.image}`}
                                        alt={product.name}
                                    />

                                    <div className="rating">
                                        4.5 ⭐
                                    </div>

                                </div>

                                <h3>{product.name}</h3>

                                <div className="price">

                                    <span className="old-price">
                                        ₹{product.oldPrice}
                                    </span>

                                    <span className="new-price">
                                        ₹{product.price}
                                    </span>

                                </div>

                                <p className="buy-text">
                                    Buy at ₹{product.price}
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

export default AllProductsPage;