import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/custom.css';
import Logo from '../components/logo';

const Header: React.FC = () => {
  return (
    <header className="py-2" style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className="container d-flex align-items-center justify-content-between">

        <h1 className="mb-0 me-4" style={{ flexShrink: 0 }}>
          <Logo />
        </h1>

        <nav>
          <ul className="nav mb-0">
            {['Home', 'Clinica', 'Saiba mais'].map((item) => (
              <li className="nav-item" key={item}>
                <NavLink
                  to={item === 'Saiba mais' ? '/saibamais' : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    "nav-link text-white px-3" + (isActive ? " active" : "")
                  }
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                  }}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <style>{`
        .nav-link {
          transition: color 0.3s, text-decoration 0.3s;
        }
        .nav-link:hover {
          color: #66aaff !important;
          text-decoration: underline;
        }
        .nav-link.active {
          font-weight: 600;
          color: #3399ff !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
