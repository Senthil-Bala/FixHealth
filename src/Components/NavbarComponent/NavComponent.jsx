import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assests/fixhealth.png";
import Form from "../BookingForm/Form";
import "./Navbar.css"
function NavComponent() {
  const [showModal, setshowModal] = useState(false)

  const handleopenModal=()=>{
    setshowModal(true)
  }
  return (
    <div>
      <div
        className="greeting text-center"
        style={{
          background: "navy",
          // height: "3rem",
          color: "white",
          fontWeight: "bolder",
        }}
      >
        <h3>Your Health is our Concern</h3>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            src={Logo}
            alt="FixHealth"
            style={{
              width: "6rem",
              height: "2rem",
            }}
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
            </Nav>

            <button onClick={handleopenModal}>Book Now</button>
            {showModal && <Form/>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
