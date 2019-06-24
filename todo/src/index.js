import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

//App - это React.element - часть концепции Virtual DOM
//ReactDOM - преобразует Virtual DOM в DOM, который может отобразить браузер
ReactDOM.render(<App />, document.getElementById('root'));