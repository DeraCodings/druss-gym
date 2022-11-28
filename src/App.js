import './App.css';
import { About } from './components/About';
import Hero from './components/Hero';
import { Offer } from './components/Offer';

import firstTestimonial from './components/images/Testimonial 1.png';
import secondTestimonial from './components/images/Testimonial 2.png';
import thirdTestimonial from './components/images/Testimonial 3.png';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';

const imagesArr = [
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial
]

const contactDetails = [
  {
    heading: 'MAILING ADDRESS',
    address: `St. George's Street, UpTown Park.`
  },
  {
    heading: 'EMAIL ADDRESS',
    address: `drussgym@gmail.com`
  },
  {
    heading: 'PHONE NUMBER',
    address: `(1)-690-7632`
  },
]

function App() {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Offer />
      <Testimonial arr={ imagesArr }/>
      <Footer contacts={ contactDetails } />
    </div>
  );
}

export default App;
