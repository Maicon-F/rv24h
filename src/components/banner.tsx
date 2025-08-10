import React from 'react';

const Banner: React.FC = () => {
  return (
    <div
      className="position-relative"
      style={{
        width: '100%',
        height: '400px',
        backgroundImage: `url('/images/banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,        
        lineHeight: 1.5,
      }}
    >
      {/* Caixa de texto sobreposta */}
      <div 
        className="intro-text position-absolute top-50 start-0 translate-middle-y ps-4"
        style={{
          maxWidth: '30%',
          borderRadius: '8px',
          color: 'black',   // deixa o texto preto explicitamente
        }}
      >

        <p> Serviço de resgate e apoio humanizado, com profissionais 
            treinados para ajudar de verdade. </p>
            <br></br>
        <p> Sabemos que o primeiro passo
            pode ser o mais díficil, por isso estamos aqui.</p>
      </div>
    </div>
  );
};

export default Banner;
