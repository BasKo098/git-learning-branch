import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1 className='title'>Witaj w mojej aplikacji React!</h1>
      <h2> Baw się dobrze</h2>
      <p>Master</p>
      <p>Hello!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
