import React, { useEffect, useState } from "react";
import "./BestSellers.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

function BestSellers() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => {

                let items = data.slice(0, 8);

                // ✅ FIX 1: ensure enough slides
                let finalItems = [];

                while (finalItems.length < 12) {
                    finalItems = [...finalItems, ...items];
                }

                setProducts(finalItems);

            })
            .catch(err => console.log(err));

    }, []);

    return (

        <section className="best-sellers">

            <div className="container">

                <h2 className="section-title">New Arrivals</h2>

                <Swiper
                    modules={[Navigation, Autoplay]}

                    spaceBetween={30}
                    slidesPerView={2.5}   // ✅ stable

                    centeredSlides={true}

                    loop={products.length >= 6}  // ✅ FIX 2
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

                    className="best-swiper"
                >

                    {products.map((product, index) => (

                        <SwiperSlide key={`${product._id}-${index}`}>
                            {/* ✅ FIX 3: unique key */}

                            <Link
                                to={`/product/${product._id}`}
                                className="product-link"
                            >

                                <div className="best-card">

                                    <div className="best-image">

                                        <img
                                            src={`http://localhost:5000/uploads/${product.image}`}
                                            alt={product.name}
                                        />

                                    </div>

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

            </div>

        </section>

    );

}

export default BestSellers;