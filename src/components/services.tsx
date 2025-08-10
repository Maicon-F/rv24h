import React from "react";
import { FaClock, FaPhoneAlt, FaAmbulance } from "react-icons/fa";

const Services: React.FC = () => {
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
        <FaClock size={40} color="#2c3e50" />
        <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
          Atendimento 24h
        </h3>
      </div>

      <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <FaAmbulance size={40} color="#2c3e50" />
        <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
          Resgate Imediato
        </h3>
      </div>

            <div style={{ flex: "1 0 160px", textAlign: "center", minWidth: "160px" }}>
        <FaPhoneAlt size={40} color="#2c3e50" />
        <h3 style={{ margin: "10px 0 6px", fontSize: "1.1rem", color: "#34495e" }}>
          Plantão de atendimento
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#7f8c8d", margin: 0 }}>
          Via ligações e whatsapp.
        </p>
      </div>
      
    </div>
  );
};

export default Services;
