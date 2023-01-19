import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogsData = [
  {id: 'nika',  name: 'Nika'},
  {id: 'anna',  name: 'anna'},
  {id: 'maxim', name: 'Maxim'},
  {id: 'alex',  name: 'Alex'},
  {id: 'luda',  name: 'Luda'},
];
const messagesData = [
  {id: 1, message: 'Hi'},
  {id: 1, message: 'Hi'},
  {id: 1, message: 'Hi'},
  {id: 1, message: 'Hi'},
  {id: 1, message: 'Hi'},
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
