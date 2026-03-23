import React, { useEffect, useState } from "react";
import "./CartPage.css";

function CartPage() {

    const [cartItems, setCartItems] = useState([]);

    /* LOAD CART */

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    /* REMOVE ITEM */

    const removeItem = (id) => {

        const updatedCart = cartItems.filter(item => item._id !== id);

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setCartItems(updatedCart);
    };

    /* TOTAL */

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (

        <section className="cart-page">

            <div className="container">

                <h1 className="cart-title">Your Cart</h1>

                <div className="cart-container">

                    {cartItems.length === 0 && (
                        <p style={{ textAlign: "center" }}>
                            Your cart is empty 🛒
                        </p>
                    )}

                    {cartItems.map((item) => (

                        <div className="cart-item" key={item._id}>

                            <img
                                src={`http://localhost:5000/uploads/${item.image}`}
                                alt={item.name}
                            />

                            <div className="cart-info">

                                <h3>{item.name}</h3>

                                <p>Price: ₹{item.price}</p>

                                <p>Quantity: {item.quantity}</p>

                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeItem(item._id)}
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

                <div className="cart-summary">

                    <h2>Total: ₹{total}</h2>

                    <button className="place-order-btn">
                        Place Order
                    </button>

                </div>

            </div>

        </section>

    );

}

export default CartPage;