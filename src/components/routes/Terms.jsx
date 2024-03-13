import {
  BodyText,
  Heading2,
  Heading3,
  TextSection,
  h2PaddingBottom,
  h3PaddingBottom,
  textPaddingBottom
} from '../../styles/styles';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import NavBar from '../general/NavBar';

export default function Terms() {
  return (
    <>
      <NavBar greenColor />
      <TextSection>
        <Heading2 className={h2PaddingBottom}>Terms of Service</Heading2>
        <Heading3 className={h3PaddingBottom}>Introduction</Heading3>
        <BodyText className={textPaddingBottom}>
          Welcome to Tspoon (&quot;App&quot;). These Terms of Service (&quot;Terms&quot;) govern
          your use of the App and outline the rights and obligations between you and us. By
          accessing or using our App, you agree to be bound by these Terms. If you do not agree with
          any part of these Terms, you should not use the App.
        </BodyText>
      </TextSection>

      <DownloadSection sectionColor="green" />
      <Footer />
    </>
  );
}
