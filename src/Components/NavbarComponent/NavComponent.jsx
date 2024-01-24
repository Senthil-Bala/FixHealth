import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assests/fixhealth.png";
import Form from "../BookingForm/Form";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
function NavComponent() {
  const [showModal, setshowModal] = useState(false);
  const [defaultCity, setdefaultCity] = useState("");

  const location = useLocation();

  const handleopenModal = () => {
    setshowModal(true);
  };

  const handleCloseModal = () => {
    setshowModal(false);
  };

  useEffect(() => {
    // Extract city from URL parameter (assuming the parameter is named 'city')
    const urlSearchParams = new URLSearchParams(location.search);
    const cityParam = urlSearchParams.get("city");

    if (cityParam) {
      setdefaultCity(cityParam);
    }
  }, [location.search]);
  return (
    <div className="header-nav">
      <div
        className="greeting"
        style={{
          background: "black",

          color: "white",
          fontWeight: "900",
        }}
      >
        <FaStar style={{ color: "gold" }} />
        <span className="greeting">
          Welcome to a community that cares about your well-being
        </span>
        <FaStar style={{ color: "gold" }} />
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-dark header">
        <Container>
          <img
            src={Logo}
            alt="FixHealth"
            style={{
              height: "2rem",
              marginBottom: "15px",
            }}
          />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="middles"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Services
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button onClick={handleopenModal} id="book-btn">
            Book Now
          </button>
          {showModal && (
            <Form showHide={handleCloseModal} defaultCity={defaultCity} />
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
