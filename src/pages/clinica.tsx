import React from 'react';
import GenericBanner from '../components/genericBanner';
import Housing from '../components/housing';
import Carrossel from '../components/carrossel';

const accomodation = [
  `${process.env.PUBLIC_URL}/images/accomodation1.png`,
  `${process.env.PUBLIC_URL}/images/accomodation2.jpg`,
  `${process.env.PUBLIC_URL}/images/housing.jpg`,
];

const externalArea = [
  `${process.env.PUBLIC_URL}/images/billiard.jpg`,
  `${process.env.PUBLIC_URL}/images/pool.jpg`,
  `${process.env.PUBLIC_URL}/images/pool2.jpg`,
  `${process.env.PUBLIC_URL}/images/pool3.jpg`,
  `${process.env.PUBLIC_URL}/images/dinnerRoom.jpg`,
];

const Home: React.FC = () => {
  return (
    <>
      <GenericBanner />
      <Housing />

      <div className="container my-4">
        <Carrossel images={accomodation} showArrows={true} />
      </div>

      {/* Texto entre os carrosséis */}
      <div className="container my-5 text-center">
        <h2 className="fw-bold">Explore nossas áreas externas</h2>
        <p className="text-muted">
          Áreas de lazer e espaços de multiatividades
        </p>
      </div>

      <div className="container my-4">
        <Carrossel images={externalArea} showArrows={true} />
      </div>
    </>
  );
};

export default Home;


