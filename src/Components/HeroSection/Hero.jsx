import React from "react";
import HeroBanner from "./Hero-Banner-.webp";
import "./Hero.css";
// Import the icons you want to use
import { FaHeart, FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Hero() {
  return (
    <div>
      <div className="hero-div">
        <>
          <div className="text-content">
            <h1>Fix Health <FaHeart color="red" size="2.5rem" /></h1>
            <h5 className="inner-text">
              {/* Use the icons as components with props */}
              <FaQuoteLeft color="gray" size="1em" />  The Physiotherapy Specialist Pain Relief and Recovery with the best
              physiotherapy near you. FixHealth has a team of experienced and expert
              physiotherapists to keep you ahead  <FaQuoteRight color="gray" size="1em" />
            </h5>
          </div>
        </>
        <img src={HeroBanner} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
