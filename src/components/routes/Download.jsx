import { Heading2, LegalPageBody, TextSection, h2PaddingBottom } from '../../styles/styles';
import Footer from '../general/Footer';
import NavBar from '../general/NavBar';
import ScrollToTop from '../../utils/ScrollToTop';

export default function Download() {
  const handleRedirect = () => {
    window.location.replace('https://play.google.com/store/games');
  };
  return (
    <>
      <ScrollToTop />
      <NavBar greenColor />
      <LegalPageBody>
        <TextSection>
          <Heading2 className={h2PaddingBottom}>Download Tspoon</Heading2>
          {handleRedirect()}
        </TextSection>
      </LegalPageBody>
      <Footer sectionColor="green" />
    </>
  );
}
