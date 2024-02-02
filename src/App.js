import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1 className='title'>Witaj w mojej aplikacji React!</h1>
      <p>Hello!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
