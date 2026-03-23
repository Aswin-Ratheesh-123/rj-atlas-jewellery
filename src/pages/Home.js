
import HeroSlider from "../components/HeroSlider/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import BestSellers from "../components/BestSellers/BestSellers";




import { useEffect, useState } from "react";

import ProductSection from "../components/ProductSection";

function Home() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));

    }, []);

    return (

        <>
            <HeroSlider />
            <BestSellers />

            {/* 🔥 Dynamic Sections */}

            {categories.map(cat => (
                <ProductSection key={cat._id} category={cat.name} />
            ))}
            <FeaturedProducts />
        </>

    );

}

export default Home;
