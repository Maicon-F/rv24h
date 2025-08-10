import React from 'react';
// Update the import path to match the actual location and filename of TopBar
import Banner from '../components/banner';
import ResgatandoVidas from '../components/resgatando'; // adjust path as needed
import Services from '../components/services'; // adjust path as needed
const images = [
  `${process.env.PUBLIC_URL}/images/image5.png`,
  `${process.env.PUBLIC_URL}/images/image2.jpg`
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

