import React, { useState, useEffect } from "react";
import "./AdminPage.css";

function AdminPage() {

    /* ================= PRODUCT STATE ================= */

    const [product, setProduct] = useState({
        name: "",
        price: "",
        oldPrice: "",
        category: "",
        description: "",
        bestSeller: false
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const [allProducts, setAllProducts] = useState([]);
    const [editId, setEditId] = useState(null);

    /* ================= CATEGORY STATE ================= */

    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    const [categoryImage, setCategoryImage] = useState(null);

    /* ================= FETCH DATA ================= */

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    const fetchCategories = () => {
        fetch("http://localhost:5000/api/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    };

    const fetchProducts = () => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setAllProducts(data))
            .catch(err => console.log(err));
    };

    /* ================= HANDLERS ================= */

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    /* ================= ADD / UPDATE PRODUCT ================= */

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("oldPrice", product.oldPrice);
        formData.append("category", product.category);
        formData.append("description", product.description);
        formData.append("bestSeller", product.bestSeller);

        if (image) formData.append("image", image);

        let url = "http://localhost:5000/api/add-product";
        let method = "POST";

        if (editId) {
            url = `http://localhost:5000/api/update-product/${editId}`;
            method = "PUT";
        }

        await fetch(url, { method, body: formData });

        alert(editId ? "Product Updated" : "Product Added");

        resetForm();
        fetchProducts();
    };

    const resetForm = () => {
        setProduct({
            name: "",
            price: "",
            oldPrice: "",
            category: "",
            description: "",
            bestSeller: false
        });
        setImage(null);
        setPreview(null);
        setEditId(null);
    };

    /* ================= DELETE PRODUCT ================= */

    const deleteProduct = async (id) => {

        await fetch(`http://localhost:5000/api/delete-product/${id}`, {
            method: "DELETE"
        });

        setAllProducts(allProducts.filter(p => p._id !== id));
    };

    /* ================= EDIT PRODUCT ================= */

    const editProduct = (item) => {

        setProduct({
            name: item.name,
            price: item.price,
            oldPrice: item.oldPrice,
            category: item.category,
            description: item.description,
            bestSeller: item.bestSeller
        });

        setPreview(`http://localhost:5000/uploads/${item.image}`);
        setEditId(item._id);
    };

    /* ================= ADD CATEGORY ================= */

    const addCategory = async () => {

        if (!newCategory) return;

        const formData = new FormData();

        formData.append("name", newCategory);
        if (categoryImage) formData.append("image", categoryImage);

        await fetch("http://localhost:5000/api/add-category", {
            method: "POST",
            body: formData
        });

        setNewCategory("");
        setCategoryImage(null);

        fetchCategories();
    };

    /* ================= DELETE CATEGORY ================= */

    const deleteCategory = async (id) => {

        await fetch(`http://localhost:5000/api/delete-category/${id}`, {
            method: "DELETE"
        });

        setCategories(categories.filter(cat => cat._id !== id));
    };

    /* ================= UI ================= */

    return (

        <div className="admin-page">

            <div className="admin-container">

                {/* ================= PRODUCT FORM ================= */}

                <div className="admin-card">

                    <h1>{editId ? "Update Product" : "Add Product"}</h1>

                    <form className="admin-form" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            placeholder="Product Name"
                            required
                        />

                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            placeholder="Price"
                            required
                        />

                        <input
                            type="number"
                            name="oldPrice"
                            value={product.oldPrice}
                            onChange={handleChange}
                            placeholder="Old Price"
                        />

                        <select
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>

                            {categories.map(cat => (
                                <option key={cat._id} value={cat.name}>
                                    {cat.name}
                                </option>
                            ))}

                        </select>

                        {/* BEST SELLER */}

                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={product.bestSeller}
                                onChange={(e) =>
                                    setProduct({
                                        ...product,
                                        bestSeller: e.target.checked
                                    })
                                }
                            />
                            <span></span>
                            Best Seller
                        </label>

                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            placeholder="Description"
                        />

                        <input type="file" onChange={handleImage} />

                        {preview && (
                            <img src={preview} alt="" className="image-preview" />
                        )}

                        <button type="submit">
                            {editId ? "Update Product" : "Add Product"}
                        </button>

                    </form>

                </div>

                {/* ================= CATEGORY SECTION ================= */}

                <div className="admin-card">

                    <h1>Manage Categories</h1>

                    <div className="category-add">

                        <input
                            type="text"
                            placeholder="New Category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />

                        <input
                            type="file"
                            onChange={(e) => setCategoryImage(e.target.files[0])}
                        />

                        <button onClick={addCategory}>
                            Add
                        </button>

                    </div>

                    <div className="category-list">

                        {categories.map(cat => (

                            <div className="category-item" key={cat._id}>

                                {cat.image && (
                                    <img
                                        src={`http://localhost:5000/uploads/${cat.image}`}
                                        alt=""
                                        className="category-img"
                                    />
                                )}

                                <span>{cat.name}</span>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteCategory(cat._id)}
                                >
                                    Delete
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

                {/* ================= PRODUCT LIST ================= */}

                <div className="admin-card">

                    <h1>All Products</h1>

                    <div className="product-list">

                        {allProducts.map(item => (

                            <div className="product-item" key={item._id}>

                                <img
                                    src={`http://localhost:5000/uploads/${item.image}`}
                                    alt=""
                                />

                                <div className="product-info">

                                    <h3>{item.name}</h3>
                                    <p>₹{item.price}</p>

                                </div>

                                <div className="product-actions">

                                    <button onClick={() => editProduct(item)}>
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteProduct(item._id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AdminPage;