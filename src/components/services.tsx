import React from "react";
import { PHONE_WHATSAPP } from "../constants/contants";
import {
  FaPhoneAlt,
  FaAmbulance,
  FaHandshake,
  FaUserShield,
} from "react-icons/fa";

// O CSS é inserido aqui para remover o efeito de link padrão
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit', // Herda a cor do elemento pai
};

const Services: React.FC = () => {
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
          <FaPhoneAlt size={40} color="#2c3e50" />
          <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
            Plantão de atendimento
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
            Via ligações e whatsapp.
          </p>
        </a>
      </div>

      <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaUserShield size={40} color="#2c3e50" />
          <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
            Internação Involuntária
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
            A pedido de familiares ou responsáveis legais
          </p>
        </a>
      </div>
      
      <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaHandshake size={40} color="#2c3e50" />
          <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
            Internação Voluntária
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
            Com consentimento do paciente.
          </p>
        </a>
      </div>
      
      <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaAmbulance size={40} color="#2c3e50" />
          <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
            Resgate Imediato
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
            Resgate especializado para situações de emergência.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Services;