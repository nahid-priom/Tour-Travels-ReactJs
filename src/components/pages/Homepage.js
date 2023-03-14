import Destination from "../Destination";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Trip from "../Trip";
import HomePageImg from "./12.jfif";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        title="Journey Begins Here"
        text="Choose your favourite destination"
        heroImg={HomePageImg}
        btnClass="btn"
        buttonText="Travel Now"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default HomePage;
