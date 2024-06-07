import { css } from '@linaria/core';

export default function Download() {
  const handleRedirect = () => {
    window.location.replace('https://play.google.com/store/apps/details?id=com.foresthu2006.Spoon');
  };
  return <div className={blankPage}>{handleRedirect()}</div>;
}

const blankPage = css`
  height: 100vh;
  background-color: white;
`;

// If we want them to sign in to google play, we might need to use this https://reactrouter.com/en/main/fetch/redirect
