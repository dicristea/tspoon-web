import sStyles, {
  BodyText,
  Heading2,
  OrderedList,
  TextSection,
  h2PaddingBottom,
  textPaddingBottom
} from '../../styles/styles';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import NavBar from '../general/NavBar';
import ScrollToTop from '../../utils/ScrollToTop';

export default function CommunityGuidelines() {
  return (
    <>
      <ScrollToTop />
      <NavBar greenColor />
      <div style={sStyles.flexColumnCenter}>
        <TextSection>
          <Heading2 className={h2PaddingBottom}>Community Guidelines</Heading2>
          <BodyText className={textPaddingBottom}>
            Welcome to Tspoon! We&apos;re delighted to have you join our community of passionate
            food enthusiasts. To ensure a positive and enjoyable experience for everyone, we have
            established these community guidelines. Please read and abide by them:
          </BodyText>
          <OrderedList>
            <li>
              <b>Respect and Kindness:</b> Treat all members with respect and kindness. Harassment,
              hate speech, bullying, or discrimination of any kind will not be tolerated.
            </li>
            <li>
              <b>Appropriate Content:</b> Share content related to cooking, recipes, and culinary
              experiences. Avoid posting unrelated or offensive material.
            </li>
            <li>
              <b>Originality:</b> Give credit to original sources when sharing recipes or content
              that is not your own. Plagiarism is not acceptable.
            </li>
            <li>
              <b>Safety First:</b> Ensure that any cooking techniques or ingredients you share are
              safe and adhere to food safety guidelines. Do not encourage risky or dangerous
              behavior.
            </li>
            <li>
              <b>Respect Privacy:</b> Do not share personal information, including contact details,
              addresses, or financial information, in public posts or private messages.
            </li>
            <li>
              <b>Age-Appropriate Content:</b> Ensure that content is appropriate for all age groups.
              We have users of varying ages, and we want to maintain a family-friendly environment.
            </li>
            <li>
              <b>Accuracy and Credibility:</b> Share accurate and credible information about cooking
              methods, ingredients, and nutrition. Misleading or false information should be
              avoided.
            </li>
            <li>
              <b>Intellectual Property:</b> Respect copyright laws and intellectual property rights.
              Do not share copyrighted recipes or content without permission.
            </li>
            <li>
              <b>Reporting and Moderation:</b> If you come across content that violates these
              guidelines, please report it to our moderation team. We will take appropriate action
              to address violations.
            </li>
            <li>
              <b>Language:</b> Communicate in a language that is respectful and inclusive. Avoid
              using offensive or profane language.
            </li>
            <li>
              <b>Feedback and Suggestions:</b> We welcome feedback and suggestions for improving the
              app. Please share your ideas constructively and respectfully.
            </li>
            <li>
              <b>Community Building:</b> Encourage a sense of community by engaging with others,
              providing helpful comments, and sharing your knowledge and experiences.
            </li>
            <li>
              <b>Stay on Topic:</b> Keep discussions and comments relevant to the topic at hand.
              Off-topic discussions can clutter the feed and disrupt the user experience.
            </li>
            <li>
              <b>User Safety:</b> Be cautious when meeting or sharing personal information with
              other users. We recommend using discretion and common sense.
            </li>
            <li>
              <b>Follow the Law:</b> Abide by local, national, and international laws while using
              our app. This includes respecting copyright, trademark, and privacy laws.
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
      </div>
      <DownloadSection sectionColor="green" />
      <Footer />
    </>
  );
}
