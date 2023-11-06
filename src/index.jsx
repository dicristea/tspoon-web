import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
// import App from './App';

const router = createBrowserRouter([
  {
    path: '/tspoon-web/',
    element: <Home />
  },
  {
    path: '/tspoon-web/',
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
