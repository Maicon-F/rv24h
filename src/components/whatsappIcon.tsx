import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppIconProps {
  phoneNumber: string;
  message?: string;
  size?: number;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  phoneNumber,
  message = "",
  size = 50,
}) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }

          .whatsapp-fixed {
            position: fixed;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            z-index: 1000;

            background-color: #25D366; /* WhatsApp green background */
            border: 2px solid white;  /* White border */
            border-radius: 50%;       /* Circular shape */

            cursor: pointer;
            animation: vibrate 1.5s infinite;
            transition: transform 0.2s;

            display: flex;
            align-items: center;
            justify-content: center;

            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          }

          .whatsapp-fixed:hover {
            transform: translateY(-50%) scale(1.2);
          }

          .whatsapp-fixed svg {
            color: white; /* Make the icon itself white */
            width: 70%;
            height: 70%;
          }
        `}
      </style>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fixed"
        aria-label="WhatsApp"
        style={{ width: size, height: size }}
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsAppIcon;
