import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-dark text-white py-1 text-center small">
      <div className="container d-flex justify-content-between">
        <span>Plantão 24h: (31) 97181-2308</span>
        <span>Nossa missão é resgatar vidas perdidas pela dependência química e alcoolismo.</span>
      </div>
    </div>
  );
};

export default TopBar;