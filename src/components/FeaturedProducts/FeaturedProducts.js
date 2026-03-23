import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/products/best-sellers")
            .then(res => res.json())
            .then(data => {

                if (data.length === 0) return;

                let items = [];

                // ✅ FIX 1: ensure enough slides (minimum 12)
                while (items.length < 12) {
                    items = [...items, ...data];
                }

                setProducts(items);

            })
            .catch(err => console.log(err));

    }, []);

    return (

        <section className="featured">

            <h2 className="featured-title">Best Sellers</h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}

                slidesPerView={2.5}   // ✅ stable value
                centeredSlides={true}

                loop={products.length >= 6}   // ✅ FIX 2
                loopAdditionalSlides={6}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}

                speed={800}
                navigation

                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 }
                }}

                className="featured-swiper"
            >

                {products.map((product, index) => (

                    <SwiperSlide key={`${product._id}-${index}`}>
                        {/* ✅ FIX 3: unique key */}

                        <Link
                            to={`/product/${product._id}`}
                            className="product-link"
                        >

                            <div className="product-card">

                                <span className="tag">BEST SELLER</span>

                                <img
                                    src={`http://localhost:5000/uploads/${product.image}`}
                                    alt={product.name}
                                />

                                <h3>{product.name}</h3>

                                <p className="price">
                                    ₹{product.price}
                                </p>

                                <button className="view-btn">
                                    View Product
                                </button>

                            </div>

                        </Link>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>

    );

}

export default FeaturedProducts;