import { css } from '@linaria/core';
import {
  BodyText,
  Heading2,
  Heading3,
  Heading4,
  List,
  SmallHeading,
  TextSection,
  bodyFontSize,
  h2PaddingBottom,
  h3PaddingBottom,
  h4PaddingBottom,
  textPaddingBottom
} from '../../styles/styles';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import NavBar from '../general/NavBar';

export default function Privacy() {
  return (
    <>
      <NavBar greenColor />
      <TextSection>
        <Heading2 className={h2PaddingBottom}>Privacy Policy</Heading2>
        <Heading3 className={h3PaddingBottom}>General</Heading3>
        <BodyText className={textPaddingBottom}>
          Tspoon is a food-based social media platform. Our app is designed to provide an
          easy-to-use experience to create, share, and discover food recipes from around the world
          and connect with the chefs that make the food.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          When you use Tspoon, you&apos;ll share information with us so we can enhance your personal
          and community experience on the platform. We are upfront and transparent about exactly
          what information we collect, how we use, where we use it, whom we share it with and how
          you can tailor your privacy choices to ensure that you are comfortable with the
          information you are sharing when using our platform.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          We&apos;ve done our best to create a privacy policy that is clear and easy to understand.
          If you have any questions or concerns regarding our privacy policy, do not hesitate to
          reach out to us.
        </BodyText>
        <Heading3 className={h3PaddingBottom}>Information</Heading3>
        <BodyText className={textPaddingBottom}>
          We collect a wide range of information from our users to provide, maintain, enhance, and
          personalize our platform and its services. Detailed below are some of the information
          types we collect.
        </BodyText>
        <Heading4 className={h4PaddingBottom}>Information You Provide</Heading4>
        <BodyText className={textPaddingBottom}>
          When you use Tspoon, we collect information that you provide to us. When you first set up
          an account with Tspoon, we collect a few important details about you: your name, username,
          password, email address, phone number, date of birth, profile picture, and location. Some
          of these pieces of information will be publicly available, such as your profile picture
          and username.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          You will also provide us with data that you share on Tspoon, such as Recipes and Tips. We
          do not prohibit other users from screenshotting or saving in any form the Recipes and
          content that is found on your public facing profile elements. Do not share any content
          that you wouldn&apos;t want everyone in the world to see.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          Furthermore, if you contact us with questions or inquiries, we collect the information
          that you provide when communicating with user support that helps us resolve your case.
        </BodyText>
        <Heading4 className={h4PaddingBottom}>Information We Get When You Use Tspoon</Heading4>
        <BodyText className={textPaddingBottom}>
          When you use Tspoon, we collect information on how you use the App. The actions you take
          on Tspoon are all data that we gather in order to better tailor your experience on the
          app. If you look over a specific recipe many times, like a recipe, or leave a tip on a
          recipe, these are all actions that we record as data.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          Below is a more detailed list of what kind of data we collect from your usage of the App:
        </BodyText>
        <List className={showDots}>
          <li>
            Usage: We collect data based on your activity on Tspoon. For example, what recipes you
            engage with the most, how far into a recipe you have explored, whether you have left a
            tip or not.
          </li>
          <li>
            Content: We collect the content you create and share on Tspoon, such as custom recipes,
            and the information on the content you create, such as the bio, interactions, and
            impressions.
          </li>
          <li>
            Device: We collect information from and about the devices you use to access Tspoon. For
            example, we collect:
            <List className={showDots}>
              <li>
                Information about the hardware and software on your device, OS version, memory,
                advertising identifiers, unique application identifiers, browser type, language,
                battery level, and time zone.
              </li>
              <li>
                Information about your wireless and mobile network connections, including but not
                limited to mobile phone number, service provider, IP address, and signal strength.
              </li>
            </List>
          </li>
          <li>
            Camera and Photos: We request permission to access your device&apos;s camera and photos
            in order to collect images and allow you to access your pictures to upload to Tspoon.
          </li>
          <li>
            Location: We request permission to collect information about your location using
            technology such as GPS, wireless networks, cell towers, Wi-Fi access points and other
            sensors from your device information.
          </li>
        </List>
        <Heading4 className={h4PaddingBottom}>Information We Collect from 3rd Parties</Heading4>
        <BodyText className={textPaddingBottom}>
          We may collect information about you from fellow users and third parties. For example:
          <List className={showDots}>
            <li>
              If you link your Tspoon account to another service, we may receive information from
              the other service.
            </li>
            <li>
              Advertisers, app developers, publishers, and third parties may share information with
              us as well. We may use this information in ways to better help and measure the
              performance of personalized ads.
            </li>
          </List>
        </BodyText>
        <Heading3 className={h3PaddingBottom}>How We Use Information</Heading3>
        <Heading4 className={h4PaddingBottom}>User Engagement</Heading4>
        <BodyText className={textPaddingBottom}>
          We use your information to personalize your experience, facilitate communication with
          other users, and provide social features within the App.
        </BodyText>
        <Heading4 className={h4PaddingBottom}>Analytics</Heading4>
        <BodyText className={textPaddingBottom}>
          We may use third-party analytics tools to analyze user behavior and improve the
          performance of our App.
        </BodyText>
        <Heading4 className={h4PaddingBottom}>Communications</Heading4>
        <BodyText className={textPaddingBottom}>
          We may send you notifications, updates, and other communications related to your use of
          the App. You can manage your communication preferences in your account settings.
        </BodyText>
        <Heading3 className={h3PaddingBottom}>Sharing Your Information</Heading3>
        <Heading4 className={h4PaddingBottom}>Third-Party Content and Integrations</Heading4>
        <BodyText className={textPaddingBottom}>
          Our platform may make use of content and integration from third-parties including but not
          limited to meal delivery services, grocery delivery services, and other food technology
          services. Tspoon is not responsible for how those third parties collect or use their
          information. Should there be a problem that persists, please consult the respective
          service&apos;s terms of service and privacy policies.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          We urge our users to review the privacy policies and terms of service of every third-party
          service that you use, especially ones that are used on Tspoon&apos;s platform. Tspoon
          cannot speak for other services or how they choose to use the information they process.
        </BodyText>
        <Heading4 className={h4PaddingBottom}>Deleting Your Information</Heading4>
        <BodyText className={textPaddingBottom}>
          User account information can be deleted from the settings page. To delete your page, click
          the settings icon on the profile page, and navigate to the accounts page. From here,
          scroll to the bottom and tap on “Delete Account”. The App will prompt your confirmation,
          and after that you account and its information will be deleted.
        </BodyText>
        <Heading4 className={h4PaddingBottom}>Children</Heading4>
        <BodyText className={textPaddingBottom}>
          Tspoon was created with the idea that anyone could be a Chef on this platform. However,
          being on the internet and being a social media platform, we restrict our age limit to 13
          years old. We want to ensure that because we are sharing more than just recipes, that
          every user is of an age capable of understanding the full depth of a social media
          platform.
        </BodyText>
        <Heading4 className={h4PaddingBottom}>Californian Users</Heading4>
        <BodyText className={textPaddingBottom}>
          If you&apos;re a Californian resident, you have certain privacy rights under Californian
          law,, including the California Consumer Privacy Act of 2018 (”CCPA”). Below is a more
          detailed look at those privacy rights protected under California Law.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>Your Rights</SmallHeading>
        <List className={showDots}>
          <li>
            <b>Right to know what personal information we collect.</b> You have the right to request
            details on the information we&apos;ve collected about you. We provide these details
            above, however, you can also get this information by contacting us.
          </li>
          <li>
            <b>Right to know who we share your data with.</b> We share your information with others
            for legitimate business purposes. For example, we use service providers to store and
            hose your data. We also share data that you have given us permission to share with ad
            providers to better personalize those ads.
          </li>
          <li>
            <b>Right to deletion.</b> We want to provide you with a simple and fun experience
            creating your brand as a chef, creating, and sharing recipes with the world. However,
            you will always have the capability of deleting information from, or the entirety of,
            the app. Some exceptions to this rule include needing data from legal processes,
            detecting fraud, investigating abuse or other Policy violations, and fixing security
            issues.
          </li>
          <li>
            <b>Get a timely response.</b> You have the right to make two free requests in any
            12-month period to get a better picture of the information you are sharing. We will
            typically respond within 45 days, or request another 45 days in difficult cases. You may
            always contact us if you need a more timely response.
          </li>
          <li>
            <b>Non-discrimination.</b> We will never punish or discriminate in any form against you
            when you exercise these privacy rights. We encourage you to review you privacy settings
            and reach out with any questions or concerns. We want to help in any way to make you as
            comfortable as possible with our processes.
          </li>
        </List>
        <Heading3 className={h3PaddingBottom}>Revisions</Heading3>
        <BodyText className={textPaddingBottom}>
          Tspoon reserves the right to update or revise this privacy policy in the future. All users
          that are on our platform will be notified as soon as a change is implemented. We may let
          you know through the revised date below, or through your personal account.
        </BodyText>
        <BodyText className={textPaddingBottom}>Date Revised: 03/12/24</BodyText>
      </TextSection>
      <DownloadSection sectionColor="green" />
      <Footer />
    </>
  );
}

const showDots = css`
  padding-left: 2rem;
  padding-bottom: 1rem;
  list-style-type: circle;
  font-size: ${bodyFontSize};
  font-weight: 200;
`;
