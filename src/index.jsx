import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './components/routes/About';
import Blog from './components/routes/Blog';
import Contact from './components/routes/Contact';
import ErrorBoundary from './components/routes/ErrorBoundary';

import App from './App';
// import App from './App';

const router = createBrowserRouter([
  {
    path: '/tspoon-web/',
    element: <App />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/tspoon-web/about',
    element: <About />
  },
  {
    path: '/tspoon-web/blog',
    element: <Blog />
  },
  {
    path: '/tspoon-web/contact-us',
    element: <Contact />
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
