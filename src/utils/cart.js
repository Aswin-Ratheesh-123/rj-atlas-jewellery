export const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item._id === product._id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // ✅ trigger UI update
    window.dispatchEvent(new Event("cartUpdated"));
};

export const removeFromCart = (id) => {

    let cart = getCart().filter(item => item._id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));
};