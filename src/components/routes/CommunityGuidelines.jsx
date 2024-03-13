import {
  BodyText,
  Heading2,
  Heading3,
  OrderedList,
  TextSection,
  h2PaddingBottom,
  h3PaddingBottom,
  textPaddingBottom
} from '../../styles/styles';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import NavBar from '../general/NavBar';

export default function CommunityGuidelines() {
  return (
    <>
      <NavBar greenColor />
      <TextSection>
        <Heading2 className={h2PaddingBottom}>Community Guidelines</Heading2>
        <Heading3 className={h3PaddingBottom}>General</Heading3>
        <BodyText className={textPaddingBottom}>
          Welcome to Tspoon! We&apos;re delighted to have you join our community of passionate food
          enthusiasts. To ensure a positive and enjoyable experience for everyone, we have
          established these community guidelines. Please read and abide by them:
        </BodyText>
        <OrderedList>
          <li>
            <b>Respect and Kindness:</b> Treat all members with respect and kindness. Harassment,
            hate speech, bullying, or discrimination of any kind will not be tolerated.
          </li>
          <li>
            <b>Appropriate Content</b>: Share content related to cooking, recipes, and culinary
            experiences. Avoid posting unrelated or offensive material.
          </li>
        </OrderedList>
        <BodyText className={textPaddingBottom}>
          Failure to adhere to these community guidelines may result in temporary or permanent
          suspension of your account. We are committed to maintaining a positive and supportive
          environment for our community members and appreciate your cooperation in achieving this
          goal.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          Thank you for being a part of Spoon&apos;s community. Together, we can create a space
          where everyone can share their love for cooking and food in a safe and enjoyable way!
        </BodyText>
      </TextSection>
      <DownloadSection sectionColor="green" />
      <Footer />
    </>
  );
}
