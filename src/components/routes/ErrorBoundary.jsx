/* eslint-disable react/no-unescaped-entities */
import { css } from '@linaria/atomic';
import { styled } from '@linaria/react';
import { useRouteError } from 'react-router-dom';
import { BLACK } from '../../styles/colors';
import NavBar from '../general/NavBar';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import { Heading1 } from '../../styles/styles';

export const ErrorPage = css`
  color: ${BLACK};
`;

const fontColorBlack = css`
  color: ${BLACK};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ErrorSection = styled.div`
  flex-grow: 1;
  padding: 10vw 4vw;
  text-align: center;
`;

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorContainer id="error-page">
      <NavBar />
      <ErrorSection>
        <Heading1>Slow down there Chef!</Heading1>
        <p>Sorry, this page doesn't exist.</p>

        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </ErrorSection>
      <DownloadSection />
      <Footer className={fontColorBlack} />
    </ErrorContainer>
  );
}
