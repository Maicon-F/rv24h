import React from "react";
import {
  FaClock,
  FaMale,
  FaFemale,
} from "react-icons/fa";

import { PHONE_WHATSAPP } from "../constants/contants";

// Objeto de estilo para remover o efeito padrão de link
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const Housing: React.FC = () => {
  const whatsappLink =`https://wa.me/${PHONE_WHATSAPP}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        width: "100%",
        padding: "70px 10px 10px 20px",
        boxSizing: "border-box",
        gap: "20px",
        overflowX: "auto",
      }}
    >

      <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaFemale size={40} color="#2c3e50" />
          <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
            Clínica Feminina
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
            Clínica exclusiva para mulheres.
          </p>
        </a>
      </div>

      <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaMale size={40} color="#2c3e50" />
          <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
            Clínica Masculina
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
            Acomodações 100% seguras para sua tranquilidade.
          </p>
        </a>
      </div>

      <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaClock size={40} color="#2c3e50" />
          <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
            Atendimento 24h
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
            Entre em contato a qualquer hora do dia ou da noite.
          </p>
        </a>
      </div>

    </div>
  );
};

export default Housing;