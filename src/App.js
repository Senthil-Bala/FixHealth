import Hero from "./Components/HeroSection/Hero";
import NavComponent from "./Components/NavbarComponent/NavComponent"
import Testimonials from "./Components/Testimonials/Testimonials";
import Form from "./Components/BookingForm/Form"
function App() {
  return (
    <div >
      <NavComponent/>
      <Hero/>
      <Testimonials/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
