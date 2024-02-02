import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Witaj w mojej aplikacji React!</h1>
      <h2> Baws się dobrze</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
