import React from 'react';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { PHONE_NUMBER, PHONE_WHATSAPP } from '../constants/contants';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .simple-footer {
            background-color: #343a40;
            color: #ffffff;
            padding: 20px 15px;
            text-align: center;
            border-top: 1px solid #e7e7e7;
          }

          .contact-list {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0;
            margin: 0;
            list-style: none;
            gap: 20px;
          }

          .contact-item {
            display: flex;
            align-items: center;
          }

          .contact-item a {
            color: #ffffff;
            text-decoration: none;
            display: flex;
            align-items: center;
            transition: color 0.3s ease-in-out;
          }

          .contact-item a:hover {
            color: #007bff;
          }

          .contact-item .icon {
            margin-right: 8px;
          }
          
          .copyright {
            margin-top: 15px;
            font-size: 0.9em;
            color: #cccccc;
          }
        `}
      </style>

      <footer className="simple-footer">
        <ul className="contact-list">
          <li className="contact-item">
            <a href={`https://wa.me/${PHONE_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} className="icon" />
              {PHONE_NUMBER}
            </a>
          </li>
          <li className="contact-item">
            <a href="mailto:resgatandovidashrs@gmail.com">
              <FaEnvelope size={20} className="icon" />
              resgatandovidashrs@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <a href="https://www.facebook.com/people/Grupo-Resgatando-Vidas-24-hrs/61579014972152/" 
               target="_blank" 
               rel="noopener noreferrer">
              <FaFacebook size={20} className="icon" />
              Facebook
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Grupo Resgatando Vidas 24 hrs. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
};

export default Footer;