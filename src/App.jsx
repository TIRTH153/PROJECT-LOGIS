import Header from "./components/Header";
import Hero from "./sections/Hero";
import Learnmore from "./sections/Learnmore";
import Aboutus from "./sections/Aboutus";
import Ourservices from "./sections/Ourservices";
import Cta from "./sections/Cta";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Slider from "./sections/Slider";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <nav className="wrapper position-relative">
        <Header />
        <Hero />
      </nav>
      <Learnmore />
      <Aboutus />
      <Ourservices />
      <Cta />
      <Features />
      <Pricing />
      <Slider />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
