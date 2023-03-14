import AboutUs from '../AboutUs';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import AboutImg from './1.jfif'




function About() {
  return (
    <div>
      <Navbar />
      <Hero
      cName = "hero-mid"
      title = "About"
      heroImg = {AboutImg}
      />
      <AboutUs />
      <Footer />

    </div>

  );
}

export default About;
