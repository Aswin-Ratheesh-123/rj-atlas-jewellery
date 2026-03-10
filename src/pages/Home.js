import React from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import BestSellers from "../components/BestSellers/BestSellers";
import BanglePreview from "../components/products/BanglePreview";
import EarringsPreview from "../components/products/EarringsPreview";
import PendantPreview from "../components/products/PendantPreview";
import RingPreview from "../components/products/RingPreview";
import BraceletPreview from "../components/products/BraceletPreview";
import NecklacePreview from "../components/products/NecklacePreview";
import AnkletPreview from "../components/products/AnkletPreview";






function Home() {
    return (
        <>
            <HeroSlider />
            <BestSellers />
            <NecklacePreview />
            <BanglePreview />
            <EarringsPreview />
            <PendantPreview />
            <RingPreview />
            <BraceletPreview />
            <AnkletPreview />
        
            <FeaturedProducts />

        </>
    );
}

export default Home;