import ContactForm from '../ContactForm';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import AboutImg from './1.jfif'


function Contact (){
  return (
    <div>
      <Navbar />
      <Hero
      cName = "hero-mid"
      title = "Contact"
      heroImg = {AboutImg}
      />
      <ContactForm />
      <Footer />
    </div>
    

  );
  }
  
  export default Contact;