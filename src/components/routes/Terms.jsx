import { css } from '@linaria/core';
import {
  BodyText,
  Heading2,
  Heading3,
  OrderedList,
  SmallHeading,
  TextSection,
  h2PaddingBottom,
  h3PaddingBottom,
  textPaddingBottom
} from '../../styles/styles';
import Footer from '../general/Footer';
import DownloadSection from '../general/DownloadSection';
import NavBar from '../general/NavBar';
import ScrollToTop from '../../utils/ScrollToTop';

export default function Terms() {
  return (
    <>
      <ScrollToTop />
      <NavBar greenColor />
      <TextSection>
        <Heading2 className={h2PaddingBottom}>Terms of Service</Heading2>
        <Heading3 className={h3PaddingBottom}>1. Introduction</Heading3>
        <BodyText className={textPaddingBottom}>
          Welcome to Tspoon (&quot;App&quot;). These Terms of Service (&quot;Terms&quot;) govern
          your use of the App and outline the rights and obligations between you and us. By
          accessing or using our App, you agree to be bound by these Terms. If you do not agree with
          any part of these Terms, you should not use the App.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>2. User Responsibilities</Heading3>
        <SmallHeading className={textPaddingBottom}>2.1 Account Creation</SmallHeading>
        <BodyText className={textPaddingBottom}>
          To use the App, you must create an account. You are responsible for providing accurate and
          up-to-date information during the registration process. You must keep your account
          credentials confidential and not share them with anyone else. You are solely responsible
          for all activities that occur under your account.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>2.2 User Conduct</SmallHeading>
        <BodyText className={textPaddingBottom}>
          You agree to use the App in compliance with all applicable laws and regulations. You must
          not engage in any activities that may:
          <OrderedList className={letterList}>
            <li>
              Violate the rights of others or infringe upon any intellectual property or proprietary
              rights;
            </li>
            <li>Harass, threaten, or harm others;</li>
            <li>
              Distribute or promote content that is unlawful, obscene, defamatory, or otherwise
              objectionable;
            </li>
            <li>
              Attempt to gain unauthorized access to the App, other user accounts, or our systems;
              or
            </li>
            <li>
              Interfere with or disrupt the App&apos;s functionality or networks connected to it.
            </li>
          </OrderedList>
        </BodyText>
        <SmallHeading className={textPaddingBottom}>2.3 Security</SmallHeading>
        <BodyText className={textPaddingBottom}>
          You are responsible for maintaining the confidentiality of your account login information
          and are fully responsible for all activities that occur under your account. Notify us
          immediately of any unauthorized use or security breach.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>3. Content Ownership and Rights</Heading3>
        <SmallHeading className={textPaddingBottom}>3.1 User Content</SmallHeading>
        <BodyText className={textPaddingBottom}>
          You retain ownership of any content you upload, post, or transmit through the App
          (&quot;User Content&quot;). By submitting User Content, you grant us a non-exclusive,
          royalty-free, worldwide, perpetual, and irrevocable license to use, display, modify,
          distribute, and sublicense your User Content solely for the purpose of providing and
          promoting the App.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>3.2 Intellectual Property</SmallHeading>
        <BodyText className={textPaddingBottom}>
          The App and all related materials, including but not limited to logos, trademarks,
          software, designs, and content created by us, are the exclusive property of the App&apos;s
          owner or its licensors. You may not use, reproduce, distribute, or modify any of these
          materials without obtaining explicit permission from the respective owner.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>3.3 Prohibited Content</SmallHeading>
        <BodyText className={textPaddingBottom}>
          You agree not to post content that is illegal, obscene, defamatory, threatening, invasive
          of privacy, infringing on intellectual property rights, or otherwise objectionable.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>4. Privacy and Data Collection</Heading3>
        <SmallHeading className={textPaddingBottom}>4.1 Privacy Policy</SmallHeading>
        <BodyText className={textPaddingBottom}>
          We are committed to protecting your privacy and handling your personal information
          responsibly. Our Privacy Policy, incorporated by reference, explains how we collect, use,
          and safeguard your information. By using the App, you consent to our privacy practices as
          outlined in the Privacy Policy.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>4.2 Data Collection</SmallHeading>
        <BodyText className={textPaddingBottom}>
          We may collect certain information from you when you use the App, such as your name, email
          address, profile information, and device information. We may also collect and store
          content you create or provide while using the App, such as photos, videos, and messages.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>5. Third-Party Services and Links</Heading3>
        <BodyText className={textPaddingBottom}>
          The App may include links to third-party websites or services that are not owned or
          controlled by us. We are not responsible for the content or privacy practices of such
          third-party sites or services. Your interactions with third-party sites or services are
          subject to their terms and policies.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>6. Prohibited Conduct</Heading3>
        <SmallHeading className={textPaddingBottom}>6.1 Abuse</SmallHeading>
        <BodyText className={textPaddingBottom}>
          You agree not to abuse, harass, threaten or impersonate other users. Any form of hate
          speech, discrimination, or bullying is strictly prohibited.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>6.2 Unauthorized Access</SmallHeading>
        <BodyText className={textPaddingBottom}>
          You may not attempt to gain unauthorized access to the App, other user accounts, or any
          related systems or networks.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>7. Disclaimers and Limitation of Liability</Heading3>
        <SmallHeading className={textPaddingBottom}>7.1 Disclaimer of Warranties</SmallHeading>
        <BodyText className={textPaddingBottom}>
          THE APP IS PROVIDED &quot;AS IS&quot; AND WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED. WE
          DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
          REPRESENTATIONS OR WARRANTIES ABOUT THE ACCURACY, COMPLETENESS, SECURITY, OR RELIABILITY
          OF THE APP.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>7.2 Limitation of Liability</SmallHeading>
        <BodyText className={textPaddingBottom}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE BE LIABLE TO YOU OR ANY THIRD
          PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING
          OUT OF OR RELATED TO YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
          LOSS OF DATA, OR LOSS OF REPUTATION. OUR TOTAL LIABILITY ARISING OUT OF OR RELATED TO
          THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID US, IF ANY, IN THE PAST SIX MONTHS.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>8. Termination</Heading3>
        <BodyText className={textPaddingBottom}>
          We reserve the right to suspend or terminate your access to the App at any time, for any
          reason, without notice or liability. Upon termination, these Terms will survive to the
          extent necessary to protect our rights and enforce any provisions that should reasonably
          survive termination.
        </BodyText>

        <Heading3 className={h3PaddingBottom}>9. Miscellaneous</Heading3>
        <SmallHeading className={textPaddingBottom}>9.1 Governing Law</SmallHeading>
        <BodyText className={textPaddingBottom}>
          These Terms are governed by and construed in accordance with the laws of California. Any
          legal suit, action, or proceeding arising out of or related to these Terms shall be
          instituted exclusively in the federal or state courts located in California.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>9.2 Entire Agreement</SmallHeading>
        <BodyText className={textPaddingBottom}>
          These Terms constitute the entire agreement between you and us regarding the App and
          supersede all prior or contemporaneous understandings and agreements.
        </BodyText>
        <SmallHeading className={textPaddingBottom}>9.3 Modifications</SmallHeading>
        <BodyText className={textPaddingBottom}>
          We reserve the right to modify or update these Terms at any time by posting the revised
          version on the App. Your continued use of the App after any modifications signify your
          acceptance of the revised Terms.
        </BodyText>
        <BodyText className={textPaddingBottom}>
          Please note that this is a general template and may need to be customized to fit the
          specific requirements and features of your social media app. It is always recommended to
          consult with legal professionals to ensure compliance with applicable laws and
          regulations.
        </BodyText>
      </TextSection>
      <DownloadSection sectionColor="green" />
      <Footer />
    </>
  );
}

const letterList = css`
  list-style-type: lower-alpha;
`;
