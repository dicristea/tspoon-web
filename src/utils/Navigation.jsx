import { styled } from '@linaria/react';
import { Routes, Route } from 'react-router-dom';
import { GRAY, WHITE } from '../styles/colors';
import About from '../components/Pages/About';
import Home from '../components/Pages/Home';
import Blog from '../components/Pages/Blog';
import Contact from '../components/Pages/Contact';

export default function Navigation() {
  return (
    <AppContainer>
      <Routes>
        <Route element={<Home />} path="/tspoon-web//*" />
        <Route element={<About />} path="/tspoon-web/about" />
        <Route element={<Blog />} path="/tspoon-web/blog" />
        <Route element={<Contact />} path="/tspoon-web/contact" />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 0;
  background-color: ${GRAY};
  display: flex;
  flex-direction: column;
  color: ${WHITE};
`;
