import React from 'react'
import './app.scss'

const App: React.FC = () => {
  return (
    <div className="container">
      <div id="sidebar">
        <ul id="mainMenu">
          <li>
            <a href="placeholder">Link 1</a>
          </li>
          <li className="active">
            <a href="placeholder">Link 2</a>
          </li>
          <li>
            <a href="placeholder">Link 3</a>
          </li>
        </ul>
      </div>
      <div className="main">
        <a className="button" href="placeholder">
          Click me
        </a>
      </div>
    </div>
  )
}

export default App
