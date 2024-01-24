import Hero from "./Components/HeroSection/Hero";
import NavComponent from "./Components/NavbarComponent/NavComponent"
import Testimonials from "./Components/Testimonials/Testimonials";
import Form from "./Components/BookingForm/Form"
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
function App() {

  // useEffect(()=>{

  // },[])
  return (
    <div >
      <NavComponent/>
      <Hero/>
      <Testimonials/>
      <Footer/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
