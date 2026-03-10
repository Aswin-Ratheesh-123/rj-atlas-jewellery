import React from "react";
import "./BanglePreview.css";

import b1 from "../assets/bangle1.jpg";
import b2 from "../assets/bangle1.jpg";
import b3 from "../assets/bangle1.jpg";
import b4 from "../assets/bangle1.jpg";

function BanglePreview() {

const bangles = [
{
name:"Traditional Gold Bangle",
rating:"4.3",
oldPrice:"₹95,000",
price:"₹85,000",
image:b1
},
{
name:"Diamond Bridal Bangle",
rating:"4.5",
oldPrice:"₹1,45,000",
price:"₹1,25,000",
image:b2
},
{
name:"Classic Temple Bangle",
rating:"4.2",
oldPrice:"₹75,000",
price:"₹60,000",
image:b3
},
{
name:"Elegant Daily Wear",
rating:"4.4",
oldPrice:"₹65,000",
price:"₹55,000",
image:b4
}
];

return (

<section className="bangle-preview">

<div className="container">

<div className="preview-header">

<h2>Bangles For You</h2>

<button className="preview-arrow">
→
</button>

</div>

<div className="bangle-grid">

{bangles.map((item,index)=>(
<div className="bangle-card" key={index}>

<div className="bangle-image">

<img src={item.image} alt={item.name}/>

<div className="rating">
{item.rating} ⭐
</div>

</div>

<h3>{item.name}</h3>

<div className="price">

<span className="old-price">
{item.oldPrice}
</span>

<span className="new-price">
{item.price}
</span>

</div>

<p className="buy-text">
Buy at {item.price}
</p>

</div>
))}

</div>

</div>

</section>

);

}

export default BanglePreview;