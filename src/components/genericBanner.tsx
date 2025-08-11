import React from 'react';

const GenericBanner: React.FC = () => {
  const mobileImage = `${process.env.PUBLIC_URL}/images/housing.jpg`;
  const desktopImage = `${process.env.PUBLIC_URL}/images/banner.png`;

  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Conheça os nossos espaços</h1>
      </div>

      <style>{`
        .banner {
          width: 100%;
          height: 250px;
          background-image: url('${mobileImage}');
          background-size: cover;
          background-position: center;
          position: relative;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          line-height: 1.5;
          color: white;
          user-select: none;
        }
        @media (min-width: 768px) {
          .banner {
            height: 400px;
            background-image: url('${desktopImage}');
          }
        }
        .banner-text {
          position: absolute;
          bottom: 20px;
          left: 20px;
          font-size: 1.8rem;
          text-shadow: 0 0 5px rgba(0,0,0,0.7);
          max-width: 60%;
        }
        .banner-text p {
          font-weight: 400;
          font-size: 1.1rem;
          margin-top: 0.3rem;
          color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default GenericBanner;
