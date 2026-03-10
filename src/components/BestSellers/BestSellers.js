import React from "react";
import "./BestSellers.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function BestSellers() {

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: "₹95,000",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: "₹65,000",
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce"
  },
  {
    id: 3,
    name: "Gold Bangles",
    price: "₹75,000",
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce"
  },
  {
    id: 4,
    name: "Diamond Earrings",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e"
  }
];

return (

<section className="best-sellers">

<div className="container">

<h2 className="section-title">Best Sellers</h2>

<Swiper
modules={[Navigation, Autoplay]}
spaceBetween={30}
slidesPerView={4}
navigation
autoplay={{ delay: 3000 }}
loop={true}

breakpoints={{
0: { slidesPerView: 1 },
600: { slidesPerView: 2 },
900: { slidesPerView: 3 },
1200: { slidesPerView: 4 }
}}
>

{products.map((product) => (

<SwiperSlide key={product.id}>

<div className="best-card">

<div className="best-image">
<img src={product.image} alt={product.name}/>
</div>

<h3>{product.name}</h3>

<p className="price">{product.price}</p>

<button className="view-btn">View Product</button>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

</section>

);

}

export default BestSellers;