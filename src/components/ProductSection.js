import React, { useEffect, useState } from "react";
import "./ProductSection.css";
import { Link } from "react-router-dom";

function ProductSection({ category }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/api/products/category/${category}`)
            .then(res => res.json())
            .then(data => {

                // show only first 4 products
                setProducts(data.slice(0, 4));

            })
            .catch(err => console.log(err));

    }, [category]);

    // ❌ If no products → don't render section
    if (products.length === 0) return null;

    return (

        <section className="product-section">

            <div className="container">

                {/* HEADER */}

                <div className="preview-header">

                    <h2>{category.toUpperCase()} FOR YOU</h2>

                    <Link to={`/products/${category}`} className="preview-arrow">
                        →
                    </Link>

                </div>

                {/* PRODUCTS */}

                <div className="product-grid">

                    {products.map(product => (

                        <Link
                            to={`/product/${product._id}`}
                            className="product-link"
                            key={product._id}
                        >

                            <div className="product-card">

                                <div className="product-image">

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

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default ProductSection;