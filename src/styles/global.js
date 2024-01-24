import { css } from '@linaria/core';
// import '@fontsource/source-sans-pro'; // Defaults to weight 400
import '@fontsource/source-sans-pro/200.css';
import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';
import '@fontsource/source-sans-pro/200-italic.css';
import '@fontsource/source-sans-pro/300-italic.css';
import '@fontsource/source-sans-pro/400-italic.css';
import '@fontsource/source-sans-pro/600-italic.css';
import '@fontsource/source-sans-pro/700-italic.css';
import '@fontsource/source-sans-pro/900-italic.css';

import { GRAY } from './colors';

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
      font-family: 'Source Sans Pro';
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      background-color: ${GRAY};
      margin: 0;
      min-height: 100vh;
    }
  }
`;
