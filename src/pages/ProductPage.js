// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { addToCart } from "../utils/cart";
// import "./ProductPage.css";

// function ProductPage() {

//     const { id } = useParams();

//     const [product, setProduct] = useState(null);

//     useEffect(() => {

//         fetch(`http://localhost:5000/api/product/${id}`)
//             .then(res => res.json())
//             .then(data => setProduct(data))
//             .catch(err => console.log(err));

//     }, [id]);

//     if (!product) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

//     return (

//         <section className="product-page">

//             <div className="container product-container">

//                 {/* IMAGE */}

//                 <div className="product-image">

//                     <img
//                         src={`http://localhost:5000/uploads/${product.image}`}
//                         alt={product.name}
//                     />

//                 </div>

//                 {/* DETAILS */}

//                 <div className="product-details">

//                     <h1>{product.name}</h1>

//                     <div className="rating">
//                         ⭐ 4.5 Rating
//                     </div>

//                     <div className="price-section">

//                         <span className="old-price">
//                             ₹{product.oldPrice}
//                         </span>

//                         <span className="new-price">
//                             ₹{product.price}
//                         </span>

//                     </div>

//                     <p className="product-description">
//                         {product.description || "No description available"}
//                     </p>

//                     <h3>Product Details</h3>

//                     <ul className="features">

//                         <li>Category: {product.category}</li>
//                         <li>Premium Quality</li>
//                         <li>Certified Jewellery</li>
//                         <li>Elegant Design</li>

//                     </ul>

//                     <button
//                         className="add-cart-btn"
//                         onClick={() => {
//                             addToCart(product);
//                             alert("Added to cart 🛒");
//                         }}
//                     >
//                         Add to Cart
//                     </button>

//                 </div>

//             </div>

//         </section>

//     );

// }

// export default ProductPage;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../utils/cart";
import "./ProductPage.css";

function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:5000/api/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));

    }, [id]);

    if (!product) {
        return <h2 className="loading">Loading...</h2>;
    }

    return (

        <section className="product-page">

            <div className="product-container">

                {/* IMAGE */}
                <div className="product-image">
                    <img
                        src={`http://localhost:5000/uploads/${product.image}`}
                        alt={product.name}
                    />
                </div>

                {/* DETAILS */}
                <div className="product-details">

                    <h1>{product.name}</h1>

                    <div className="rating">
                        ⭐ 4.5 Rating
                    </div>

                    <div className="price-section">

                        {product.oldPrice && (
                            <span className="old-price">
                                ₹{product.oldPrice}
                            </span>
                        )}

                        <span className="new-price">
                            ₹{product.price}
                        </span>

                    </div>

                    <p className="product-description">
                        {product.description || "No description available"}
                    </p>

                    <h3>Product Details</h3>

                    <ul className="features">
                        <li>Category: {product.category}</li>
                        <li>Premium Quality</li>
                        <li>Certified Jewellery</li>
                        <li>Elegant Design</li>
                    </ul>

                    <button
                        className="add-cart-btn"
                        onClick={() => {
                            addToCart(product);
                            alert("Added to cart 🛒");
                        }}
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </section>

    );

}

export default ProductPage;