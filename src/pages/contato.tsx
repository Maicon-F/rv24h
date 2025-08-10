import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const contato = () => {
  return (
    <>
      <style>
        {`
        .contato-container {
            max-width: 900px;
            width: 90%;
            background-color: #ffffff;
            padding: 40px 60px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            margin: 40px auto;
        }

        .contato-h1, .contato-h2 {
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            color: #004d99;
            margin-bottom: 20px;
            text-align: center;
        }

        .contato-icon-link {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2em;
            color: #333;
            text-decoration: none;
            margin-bottom: 15px;
            transition: color 0.3s ease;
        }

        .contato-icon-link:hover {
            color: #004d99;
        }

        .contato-icon {
            margin-right: 10px;
        }

        .contato-form-label {
            font-weight: 600;
            color: #333;
        }
        
        .contato-form-control {
            border-radius: 8px;
        }

        @media (max-width: 768px) {
            .contato-container {
                padding: 30px;
            }
            .contato-h1 {
                font-size: 2em;
            }
            .contato-h2 {
                font-size: 1.5em;
            }
        }
        `}
      </style>

      <div className="contato-container">
        <h1 className="contato-h1">Fale Conosco</h1>
        <p className="text-center text-secondary">
          Estamos disponíveis 24 horas por dia para ajudar. A sua nova jornada começa com um simples contato.
        </p>

        <hr className="my-5" />

        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <h2 className="contato-h2">Contato Rápido</h2>
            <p className="text-secondary">A forma mais rápida de falar conosco é por telefone ou WhatsApp.</p>
            <a href="tel:+5522997155439" className="contato-icon-link">
              <FaPhoneAlt size={24} className="contato-icon" />
              <span>+55 (22) 99715-5439</span>
            </a>
            <a href="https://wa.me/5522997155439" target="_blank" rel="noopener noreferrer" className="contato-icon-link">
              <FaWhatsapp size={24} className="contato-icon" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="col-md-6 mb-4">
            <h2 className="contato-h2">Email</h2>
           
            <div className="d-flex flex-column align-items-center">
              <a href="mailto:resgatandovidashrs@gmail.com" className="contato-icon-link">
                <FaEnvelope size={24} className="contato-icon" />
                <span>resgatandovidashrs@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-5" />

      </div>
    </>
  );
};

export default contato;