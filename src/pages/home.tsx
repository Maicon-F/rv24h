import React from 'react';
// Update the import path to match the actual location and filename of TopBar
import Header from '../components/header';       // adjust path as needed
import Banner from '../components/banner';
import ResgatandoVidas from '../components/resgatando'; // adjust path as needed
import Services from '../components/services'; // adjust path as needed
const images = [
  '/images/image5.png',  
  '/images/image2.jpg'
];

const home: React.FC = () => {
  return (
    <>
      <Banner />
      <Services />
      <div className="container my-2">
        <ResgatandoVidas images={images} />
      <div>
    
  </div>

      </div>
    </>
  );
};

export default home;

