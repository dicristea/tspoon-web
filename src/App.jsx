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
    <AppContainer id="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <Routes>
        <Route exact element={<Home />} path="" />
        <Route element={<About />} path="/about" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<ErrorBoundary />} />
      </Routes>
      {/* </BrowserRouter> */}
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
