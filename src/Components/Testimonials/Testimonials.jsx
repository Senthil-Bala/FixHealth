import React from "react";
import Data from "./Data";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Testimonials.css";

function Testimonials() {
  const testimonialsPairs = [];

  // Group testimonials in pairs
  for (let i = 0; i < Data.length; i += 3) {
    testimonialsPairs.push(Data.slice(i, i + 3));
  }

  return (
    <div className="container">
      <div className="text-center ">
        <h1 className="client">What our clients say</h1>
      </div>
      <div className="underline"></div>
      <Carousel
        nextIcon={
          <span
            aria-hidden="true"
            className="text-success next-prev-icon rounded-circle"
          >
            <i className="fas fa-chevron-right"></i>
          </span>
        }
        prevIcon={
          <span
            aria-hidden="true"
            className="text-light next-prev-icon rounded-circle"
          >
            <i className="fas fa-chevron-left"></i>
          </span>
        }
      >
        {testimonialsPairs.map((pair, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around align-items-center">
              {pair.map((ele) => (
                <Card
                  style={{ width: "16rem" }}
                  key={ele.id}
                  className="testimonial-card"
                >
                  <Card.Img
                    variant="top"
                    src={ele.image}
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>
                      <span className="author-name large-text">{ele.author}</span>
                    </Card.Title>
                    <Card.Text>
                      <FaQuoteLeft className="quote-icon" /> {ele.text} <FaQuoteRight className="quote-icon" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
