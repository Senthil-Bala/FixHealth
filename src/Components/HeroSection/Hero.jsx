import React from "react";
import HeroBanner from "./Hero-Banner-.webp";
import "./Hero.css";
import { FaHeart, FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Hero() {
  return (
    <div>
      <div className="hero-div">
        <>
          <div className="text-content">
            <h1>Fix Health <FaHeart className="heart" /></h1>
            <h5 className="inner-text">
              
              <FaQuoteLeft color="alice" size="1rem" />  The Physiotherapy Specialist Pain Relief and Recovery with the best
              physiotherapy near you. FixHealth has a team of experienced and expert
              physiotherapists to keep you ahead  <FaQuoteRight color="alice" size="1rem" />
            </h5>
          </div>
        </>
        <img src={HeroBanner} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
