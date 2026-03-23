import React, { useEffect, useState } from "react";
import "./CollectionsPage.css";
import { Link } from "react-router-dom";


function CollectionsPage() {

const [categories, setCategories] = useState([]);

useEffect(() => {

fetch("http://localhost:5000/api/categories")
.then(res => res.json())
.then(data => setCategories(data))
.catch(err => console.log(err));

}, []);

return (

<section className="collections">

<div className="container">

<h1 className="page-title">Collections</h1>

<div className="collections-grid">

{categories.map(cat => (

<Link
to={`/products/${cat.name}`}
className="collection-card"
key={cat._id}
>

<div className="collection-image">

<img
src={`http://localhost:5000/uploads/${cat.image}`}
alt={cat.name}
/>

</div>

<h3>{cat.name}</h3>

</Link>

))}

</div>

</div>

</section>

);

}

export default CollectionsPage;