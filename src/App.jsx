
import './App.css'
import ContactUs from './components/ContactUs'
import Features from './components/Features'
import Footer from './components/Footer'
import Home from './components/Home'

import Navbar from './components/Navbar'
import Products from './components/Products'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <Products/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App