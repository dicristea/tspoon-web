import { styled } from '@linaria/react';
import { Routes, Route } from 'react-router-dom';
import { GRAY, WHITE } from './styles/colors';
import About from './components/routes/About';
import Home from './components/routes/Home';
import Blog from './components/routes/Blog';
import Contact from './components/routes/Contact';
import ErrorBoundary from './components/routes/ErrorBoundary';
import Privacy from './components/routes/Privacy';
import Terms from './components/routes/Terms';
import CommunityGuidelines from './components/routes/CommunityGuidelines';

function App() {
  return (
    <AppContainer id="App">
      <Routes>
        <Route exact element={<Home />} path="" />
        <Route element={<About />} path="/about" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Privacy />} path="/privacy" />
        <Route element={<CommunityGuidelines />} path="/community-guidelines" />
        <Route element={<Terms />} path="/terms" />
        <Route path="../public/.well-known/assetlinks.json" />
        <Route element={<ErrorBoundary />} />
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
