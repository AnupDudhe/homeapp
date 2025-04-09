import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Microservices Frontend</h1>
      <div className="services">
        <a
          href={process.env.REACT_APP_GROCERY_URL}
          className="service-box grocery"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grocery App
        </a>
        <a
          href={process.env.REACT_APP_TODOS_URL}
          className="service-box todos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todos App
        </a>
        <a
          href={process.env.REACT_APP_ORDERS_URL}
          className="service-box orders"
          target="_blank"
          rel="noopener noreferrer"
        >
          Orders App
        </a>
      </div>
    </div>
  );
}




/*import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Microservices Frontend</h1>
      <div className="services">
        <a href="http://localhost:3001" className="service-box grocery" target="_blank" rel="noopener noreferrer">Grocery App</a>
        <a href="http://localhost:3002" className="service-box todos" target="_blank" rel="noopener noreferrer">Todos App</a>
        <a href="http://192.168.1.12:3002" className="service-box orders" target="_blank" rel="noopener noreferrer">Orders App</a>
      </div>
    </div>
  );
}

*/
