// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './style/style.css';


const App = () => {
  const galleryImages = [
    require('./img/Africa.jpg'),
    require('./img/Asia.jpg'),
    require('./img/Europe.jpg'),
    require('./img/America.jpg'),
  ];

  return (
    
      <div className="container">
        <Header />
        <main>
        <Banner
          title="Be creative"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
          primaryButtonText="Primary"
          secondaryButtonText="Secondary"
        />
        <Gallery images={galleryImages} />
        </main>
        <Footer />
      </div>
   
  );
}

export default App;
