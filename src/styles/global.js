import { css } from '@linaria/core';
import '@fontsource/source-sans-pro'; // Defaults to weight 400
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
