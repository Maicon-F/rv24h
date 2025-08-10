import React from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link

const Logo: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}> {/* Envolva o h1 com o Link */}
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '1.75rem',
          margin: 0,
          userSelect: 'none',
          letterSpacing: 0,
          display: 'inline-flex',
        }}
      >
        <span style={{ color: 'white' }}>RV</span>
        <span style={{ color: '#87CEFA' }}>24</span>
        <span style={{ color: 'white' }}>H</span>
      </h1>
    </Link>
  );
};

export default Logo;
