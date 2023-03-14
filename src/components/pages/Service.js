import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Trip from "../Trip";
import AboutImg from "./1.jfif";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" title="Service" heroImg={AboutImg} />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
