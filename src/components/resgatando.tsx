import React from "react";
import Carousel from "./carrossel"; // seu componente existente

interface ResgatandoVidasProps {
  images: string[];
}

const ResgatandoVidas: React.FC<ResgatandoVidasProps> = ({ images }) => {
  return (
    <div
      className="d-flex"
      style={{
        flexWrap: "wrap", // permite quebra vertical em telas pequenas
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {/* Carousel lado esquerdo, flexível e responsivo */}
      <div
        className="flex-fill d-flex align-items-center justify-content-center p-3"
        style={{
          flexBasis: "300px", // largura base mínima do carousel
          maxWidth: "800px",  // limite máximo para telas maiores
          width: "100%",      // ocupa tudo dentro do flexBasis/maxWidth
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "100%", height: "auto" }}>
          <Carousel images={images} />
        </div>
      </div>

      {/* Texto lado direito, largura fixa com flexShrink para encolher */}
      <div
        className="d-flex align-items-center justify-content-center p-4"
        style={{
          flexBasis: "280px", // largura base para o texto
          maxWidth: "450px",
          flexShrink: 1,
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <p
          style={{
            paddingRight: "10px",
            maxWidth: "600px",
            lineHeight: 1.6,
            fontSize: "1.2rem",
            margin: 0,
          }}
        >
          <strong>Resgatando Vidas</strong> oferece um ambiente de apoio e profissionais dedicados para te ajudar
          a reconstruir sua vida.
          <br />
          <br />
          Estamos aqui para te apoiar em cada passo do caminho.
        </p>
      </div>
    </div>
  );
};

export default ResgatandoVidas;
