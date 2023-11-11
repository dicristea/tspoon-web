import { styled } from '@linaria/react';
import { Routes, Route } from 'react-router-dom';
import { GRAY, WHITE } from './styles/colors';
import About from './components/routes/About';
import Home from './components/routes/Home';
import Blog from './components/routes/Blog';
import Contact from './components/routes/Contact';
import ErrorBoundary from './components/routes/ErrorBoundary';

function App() {
  return (
    <AppContainer id="root">
      <Home />
      <Routes>
        <Route element={<Home />} errorElement={<ErrorBoundary />} path="//*" />
        <Route element={<About />} errorElement={<ErrorBoundary />} path="/about" />
        <Route element={<Blog />} errorElement={<ErrorBoundary />} path="/blog" />
        <Route element={<Contact />} errorElement={<ErrorBoundary />} path="/contact-us" />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  background-color: ${GRAY};
  display: flex;
  flex-direction: column;
  color: ${WHITE};
`;
