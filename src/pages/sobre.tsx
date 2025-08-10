import React from 'react';

// Certifique-se de que o Bootstrap CSS está importado em seu projeto.
// Exemplo: import 'bootstrap/dist/css/bootstrap.min.css';

const sobre = () => {
  return (
    <>
      <style>
        {`
        .sobre-container {
            max-width: 900px;
            width: 90%;
            background-color: #ffffff;
            padding: 40px 60px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            margin: 40px auto; /* Centraliza o container */
        }
        
        .sobre-h1, .sobre-h2, .sobre-h3 {
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            color: #004d99;
            margin-top: 40px;
            margin-bottom: 15px;
        }

        .sobre-h1 {
            font-size: 2.5em;
            text-align: center;
            margin-top: 0;
        }

        .sobre-h2 {
            font-size: 1.8em;
            border-bottom: 2px solid #004d99;
            padding-bottom: 8px;
        }
        
        .sobre-p {
            font-family: 'Inter', sans-serif;
            font-size: 1em;
            color: #555;
            margin-bottom: 20px;
        }
        
        .sobre-h3 {
            font-size: 1.4em;
            color: #333;
            margin-bottom: 10px;
        }

        .sobre-footer-text {
            font-style: italic;
            text-align: center;
            margin-top: 40px;
            color: #777;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .sobre-container {
                padding: 30px;
            }
            .sobre-h1 {
                font-size: 2em;
            }
            .sobre-h2 {
                font-size: 1.5em;
            }
            .sobre-h3 {
                font-size: 1.2em;
            }
        }
        `}
      </style>

      <div className="sobre-container">
        {/* Título da página */}
        <h1 className="sobre-h1">A Nossa História</h1>
        <p className="sobre-p">
          Na Resgatando Vidas 24h, a nossa missão vai além do tratamento; é sobre reacender a esperança e oferecer um caminho real para a recuperação. Acreditamos que, com o apoio certo e a comunidade certa, é possível superar qualquer desafio. Estamos aqui para ajudar a escrever um novo capítulo na sua vida, um capítulo de liberdade, saúde e felicidade.
        </p>

        <hr className="my-5" />

        {/* Seção sobre Adicção */}
        <h2 className="sobre-h2">O Que é a Adicção?</h2>
        <p className="sobre-p">
          A adicção é uma doença complexa, e não uma falha de caráter. É uma condição crônica que afeta o cérebro, modificando a forma como a pessoa pensa, sente e age. A dependência química e o alcoolismo têm um impacto profundo não só na vida de quem sofre, mas também na família e na comunidade. O primeiro passo para a recuperação é entender que a adicção requer tratamento profissional e um ambiente de apoio.
        </p>

        <hr className="my-5" />

        {/* Seção sobre Elementos do Tratamento */}
        <h2 className="sobre-h2">Os Elementos Essenciais do Nosso Tratamento</h2>
        <p className="sobre-p">
          O nosso programa de tratamento foi construído sobre pilares sólidos, desenhados para abordar a adicção de forma completa. Acreditamos numa abordagem personalizada, focada nas necessidades de cada pessoa.
        </p>

        {/* Itens do tratamento usando grid do Bootstrap */}
        <div className="row mt-4">
          <div className="col-lg-6 mb-4">
            <h3 className="sobre-h3">1. Comunidade e Apoio Mútuo</h3>
            <p className="sobre-p">
              A jornada da recuperação não precisa de ser solitária. Os nossos pacientes encontram uma <strong>comunidade de apoio</strong> onde podem partilhar experiências, celebrar vitórias e enfrentar desafios em conjunto.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <h3 className="sobre-h3">2. Equipe Multidisciplinar</h3>
            <p className="sobre-p">
              A nossa equipe é composta por <strong>profissionais especializados</strong> em várias áreas — médicos, terapeutas, psicólogos e conselheiros. Juntos, criamos um plano de tratamento que não foca apenas na abstinência, mas também nas causas emocionais e psicológicas da adicção.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <h3 className="sobre-h3">3. Tratamento Personalizado</h3>
            <p className="sobre-p">
              Não há duas histórias iguais, e por isso o nosso tratamento também não é. Desde o primeiro dia, trabalhamos para criar um <strong>plano individualizado</strong> que se adapte às suas necessidades únicas.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <h3 className="sobre-h3">4. Ferramentas para a Vida</h3>
            <p className="sobre-p">
              Para além de um ambiente seguro, equipamos os nossos pacientes com <strong>ferramentas práticas para a vida</strong>. Através de terapias, aprendem a gerir o stress, a lidar com gatilhos e a reconstruir relacionamentos.
            </p>
          </div>
        </div>
        
        <hr className="my-5" />

        {/* Call to action no final */}
        <div className="text-center fst-italic sobre-footer-text mt-5">
          <p>A coragem de buscar ajuda é o maior passo. Se você ou alguém que ama está a lutar contra a adicção, saiba que existe um lugar seguro e acolhedor à espera. Na Resgatando Vidas 24h, estamos prontos para receber você.</p>
        </div>
      </div>
    </>
  );
};

export default sobre;