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
      <div>
        <Navbar />
      </div>
      <br />
      <div>
        <Hero1 />
      </div>
      <div>
        <Analitycs />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <Price />
      </div>
      <div>
        <Footer />
      </div>
      
    </>
  )
}

export default App;
