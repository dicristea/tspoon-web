import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './components/routes/About';
import Blog from './components/routes/Blog';
import Contact from './components/routes/Contact';
import ErrorBoundary from './components/routes/ErrorBoundary';

import Root from './components/routes/Root';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/contact-us',
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
reportWebVitals(console.log());
