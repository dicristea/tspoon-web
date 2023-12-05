import { styled } from '@linaria/react';
import { Routes, Route } from 'react-router-dom';
import { GRAY, WHITE } from '../../styles/colors';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import ErrorBoundary from './ErrorBoundary';

function Root() {
  return (
    <RootContainer id="root">
      <Routes>
        <Route element={<Home />} errorElement={<ErrorBoundary />} path="/*" />
        <Route element={<About />} errorElement={<ErrorBoundary />} path="/about" />
        <Route element={<Blog />} errorElement={<ErrorBoundary />} path="/blog" />
        <Route element={<Contact />} errorElement={<ErrorBoundary />} path="/contact-us" />
      </Routes>
    </RootContainer>
  );
}

export default Root;

const RootContainer = styled.div`
  margin: 0;
  background-color: ${GRAY};
  display: flex;
  flex-direction: column;
  color: ${WHITE};
`;
