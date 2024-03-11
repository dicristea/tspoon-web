import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import JoinWaitlist from './components/routes/JoinWaitlist';
import { AppContext } from './utils/context';

const LAUCH_LIVE = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext.Provider value={LAUCH_LIVE}>
      {LAUCH_LIVE ? (
        // CURRENTLY NOT IN USE => will become modal
        <JoinWaitlist />
      ) : (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
          <App />
        </BrowserRouter>
      )}
    </AppContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
