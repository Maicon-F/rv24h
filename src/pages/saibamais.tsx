import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Carrossel from '../components/carrossel';
const imagens = [
  `${process.env.PUBLIC_URL}/images/resgate1.jpg`,
];
const Resgate = () => {
  return (
    <>
      <style>
        {`
        .resgate-container {
            max-width: 900px;
            width: 90%;
            background-color: #ffffff;
            padding: 40px 60px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            margin: 40px auto;
            text-align: center;
        }

        .resgate-h1, .resgate-h2 {
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            color: #004d99;
            margin-bottom: 20px;
        }

        .resgate-image {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin-bottom: 30px;
        }

        .resgate-text {
            font-size: 1.1em;
            line-height: 1.6;
            color: #555;
            text-align: justify;
            margin-bottom: 30px;
        }

        .resgate-icon-link {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2em;
            color: #333;
            text-decoration: none;
            margin-bottom: 15px;
            transition: color 0.3s ease;
        }

        .resgate-icon-link:hover {
            color: #004d99;
        }

        .resgate-icon {
            margin-right: 10px;
        }

        .resgate-info-item {
          flex: 1 0 160px;
          text-align: center;
          min-width: 160px;
        }

        .resgate-info-item h3 {
          margin: 10px 0 6px;
          font-size: 1.1rem;
          color: #34495e;
        }

        .resgate-info-item p {
          font-size: 0.9rem;
          color: #7f8c8d;
          margin: 0;
        }

        .resgate-info-image {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        @media (max-width: 768px) {
            .resgate-container {
                padding: 30px;
            }
            .resgate-h1 {
                font-size: 2em;
            }
            .resgate-h2 {
                font-size: 1.5em;
            }
        }
        `}
      </style>

      <div className="resgate-container">
        <h1 className="resgate-h1">Sobre o Resgate</h1>
        <p className="text-center text-secondary">
          Nosso compromisso é com a vida e a recuperação. Entenda como funciona nosso processo de resgate.
        </p>

        <hr className="my-5" />
         <Carrossel images={imagens} showArrows={false} />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <div className="resgate-info-item">
                <h3 className="resgate-info-h3">
                  Equipe Especializada
                </h3>
                <p className="resgate-info-p">
                  Nossos profissionais são treinados para um acolhimento humanizado.
                </p>
            </div>
        </div>

        <hr className="my-5" />
        
        <p className="resgate-text">
          O resgate é a fase mais crucial para iniciar a jornada de recuperação. Nós da <b>Resgatando Vidas</b> compreendemos a urgência e a sensibilidade desse momento. 
        </p>
        <hr className="my-5" />

        <h2 className="resgate-h2">Contato para Resgate</h2>
        <p className="text-secondary">
          Estamos disponíveis 24 horas por dia para atender sua solicitação de forma rápida e eficiente.
        </p>

        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <h2 className="resgate-h2">Contato Rápido</h2>
            <p className="text-secondary">A forma mais rápida de falar conosco é por telefone ou WhatsApp.</p>
            <a href="tel:+5522997155439" className="resgate-icon-link">
              <FaPhoneAlt size={24} className="resgate-icon" />
              <span>+55 (22) 99715-5439</span>
            </a>
            <a href="https://wa.me/5522997155439" target="_blank" rel="noopener noreferrer" className="resgate-icon-link">
              <FaWhatsapp size={24} className="resgate-icon" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="col-md-6 mb-4">
            <h2 className="resgate-h2">Email</h2>
            <div className="d-flex flex-column align-items-center">
              <a href="mailto:resgatandovidashrs@gmail.com" className="resgate-icon-link">
                <FaEnvelope size={24} className="resgate-icon" />
                <span>resgatandovidashrs@gmail.com</span>
              </a>
            </div>
          </div>

        <p className="resgate-text">
           Nosso serviço de resgate é feito por um <b>grupo de pessoas especializadas</b> e treinadas para atuar em situações de crise. Nossa equipe é composta por profissionais com experiência em intervenção, garantindo um acolhimento humanizado e seguro para o indivíduo e sua família.
        </p>
        </div>

        <hr className="my-5" />

      </div>
    </>
  );
};

export default Resgate;