import React from 'react'
import Hero from './component/Hero'
import { Navbar } from './component/Navbar'
import Product from './component/Product'
import Partnership from './component/Partnership'
import Footer from './component/Footer'
import AOS from "aos"
import "aos/dist/aos.css"
import News from './component/News'
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800,
      easing: "ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Product/>
      <Partnership/>
      <News/>
      <Footer/>
      
    </div>

  )
}

export default App