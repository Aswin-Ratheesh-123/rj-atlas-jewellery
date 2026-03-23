import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../utils/cart";
import "./BanglesPage.css";

function CategoryProductsPage() {

    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/api/products/category/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));

    }, [category]);

    return (

        <section className="bangles-page">

            <div className="container">

                <h1 className="page-title">
                    {category.toUpperCase()} COLLECTION
                </h1>

                <div className="bangles-grid">

                    {products.map(product => (

                        /* ✅ CLICKABLE PRODUCT */
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

                                <button
                                    className="cart-btn"
                                    onClick={(e) => {
                                        e.preventDefault(); // prevent navigation
                                        addToCart(product);
                                        alert("Added to cart");
                                    }}
                                >
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

export default CategoryProductsPage;