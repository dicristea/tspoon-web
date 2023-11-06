import { css } from '@linaria/atomic';
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

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <NavBar />
      <div className="ErrorPage" id="error-page">
        <Heading1>Oops!</Heading1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <DownloadSection />
      <Footer className={fontColorBlack} />
    </div>
  );
}
