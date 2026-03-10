import React from "react";
import "./FeaturedProducts.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";


import f1 from "../assets/bangle1.jpg";
import f2 from "../assets/bangle1.jpg";
import f3 from "../assets/bangle1.jpg";
import f4 from "../assets/bangle1.jpg";

function FeaturedProducts(){

const products = [
{
name:"Gold Ring",
price:"₹45,000",
image:f1
},
{
name:"Diamond Necklace",
price:"₹1,25,000",
image:f2
},
{
name:"Gold Bangle",
price:"₹60,000",
image:f3
},
{
name:"Diamond Earrings",
price:"₹55,000",
image:f4
}
];

return(

<section className="featured">

<h2 className="featured-title">Featured Products</h2>

<Swiper
modules={[EffectCoverflow, Autoplay]}
effect="coverflow"
centeredSlides={true}
slidesPerView={3}
loop={true}
autoplay={{delay:3000}}

coverflowEffect={{
rotate:0,
stretch:0,
depth:200,
modifier:1,
slideShadows:false
}}

breakpoints={{
0:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}}

className="featured-swiper"
>

{products.map((product,index)=>(

<SwiperSlide key={index}>

<div className="product-card">

<img src={product.image} alt={product.name}/>

<h3>{product.name}</h3>

<p className="price">{product.price}</p>

<button className="view-btn">View Product</button>

</div>

</SwiperSlide>

))}

</Swiper>

</section>

);

}

export default FeaturedProducts;