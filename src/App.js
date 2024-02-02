import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Witaj w mojej aplikacji React!</h1>
      <p>paragraf</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
