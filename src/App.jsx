import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Analitycs from './components/Analytics';
import NewsLetter from './components/NewsLetter';
import Price from './components/Price';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <br />
      <Hero1 />
      <Analitycs />
      <NewsLetter />
      <Price />
      <Footer />


    </>
  )
}

export default App;
