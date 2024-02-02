import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Witaj w mojej aplikacji React Master!</h1>
      <h2> Baw się dobrze</h2>
      <p>Master</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
