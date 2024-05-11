import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { AppContext } from './utils/context';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Blog from './components/routes/Blog';
import Contact from './components/routes/Contact';
import Privacy from './components/routes/Privacy';
import CommunityGuidelines from './components/routes/CommunityGuidelines';
import Terms from './components/routes/Terms';
import ErrorBoundary from './components/routes/ErrorBoundary';
import Download from './components/routes/Download';

const LAUCH_LIVE = false;
const date = new Date();
const currentYear = date.getFullYear();

const AppValues = { LAUCH_LIVE, currentYear };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact element={<Home />} errorElement={<ErrorBoundary />} path="/" />
      <Route element={<About />} errorElement={<ErrorBoundary />} path="/about" />
      <Route element={<Blog />} path="/blog" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Privacy />} path="/privacy" />
      <Route element={<CommunityGuidelines />} path="/community-guidelines" />
      <Route element={<Terms />} path="/terms" />
      <Route element={<Download />} path="/download" />
      <Route path="../%PUBLIC_URL%/.well-known/assetlinks.json" />
      <Route element={<ErrorBoundary />} path="/*" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={AppValues}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
