import React from 'react';
import './app.scss';

const App: React.FC = () => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <ul className="sidemenu">
          <li className="sidemenu__item">
            <a className="sidemenu__link" href="placeholder">
              Link 1
            </a>
          </li>
          <li className="sidemenu__item sidemenu__item--active">
            <a className="sidemenu__link" href="placeholder">
              Link 2
            </a>
            <a className="button button--small" href="placeholder">
              Click me
            </a>
          </li>
          <li className="sidemenu__item">
            <a className="sidemenu__link" href="placeholder">
              Link 3
            </a>
          </li>
        </ul>
        <ul className="sidemenu sidemenu--secondary">
          <li className="sidemenu__item">
            <a className="sidemenu__link" href="placeholder">
              Another link 1
            </a>
          </li>
          <li className="sidemenu__item sidemenu__item--active">
            <a className="sidemenu__link" href="placeholder">
              Another link 2
            </a>
            <a className="button" href="placeholder">
              Click me
            </a>
          </li>
          <li className="sidemenu__item">
            <a className="sidemenu__link" href="placeholder">
              Another link 3
            </a>
          </li>
        </ul>
      </div>
      <div className="layout__main">
        <a className="button" href="placeholder">
          Click me
        </a>
        <a className="button button--small" href="placeholder">
          Click me
        </a>
      </div>
    </div>
  );
};

export default App;
