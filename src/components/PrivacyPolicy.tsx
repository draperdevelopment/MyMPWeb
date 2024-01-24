import React from "react";

const PrivacyPolicy: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh",
    marginBottom: "5vh",
    marginLeft: "10vw",
    marginRight: "10vw",
    // maxWidth: "45ch",
  };

  const textContainerStyle: React.CSSProperties = {
    width: "70ch",
    textAlign: "left",
    // backgroundColor: "red",
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1>Privacy Policy for MyMP</h1>
        <br />
        <p>Last updated: 12/01/2024</p>
        <br />
        <h3>Introduction</h3>
        <br />
        <p>
          Welcome to MyMP! This privacy policy explains how we collect, use, and
          protect your personal information when you use the MyMP mobile
          application.
        </p>
        <br />
        <h3>Data Collection and Use</h3>
        <br />
        <p>
          To use MyMP, you are required to sign in using either Apple Sign-In or
          Google Sign-In. We collect the following information from these
          services:
        </p>
        <br />
        <ul>
          <li>Your email address</li>
        </ul>
        <br />
        <p>
          This information is used to create and manage your user account in
          MyMP. We do not use your personal information for any other purpose
          than account management and app functionality. Additionally, with your
          consent, we may access your location data to determine your local
          Member of Parliament (MP). This is an opt-in feature, and you have
          full control over whether or not to share your location information.
          Your location data is used solely for the purpose of providing
          relevant MP information and is not used for any other purpose.
        </p>
        <br />
        <h3>Log Data</h3>
        <br />
        <p>
          We collect information that your device sends whenever you visit our
          app (Log Data). This Log Data may include information such as your
          device's Internet Protocol ("IP") address, device name, operating
          system version, the configuration of the app, the time and date of
          your use, and other statistics.
        </p>
        <br />
        <h3>Cookies</h3>
        <br />
        <p>We do not use cookies to collect information in our app.</p>
        <br />
        <h3>Data Security</h3>
        <br />
        <p>
          We value your trust in providing us your personal information and are
          striving to use commercially acceptable means of protecting it.
          However, no method of transmission over the internet or method of
          electronic storage is 100% secure and reliable, and we cannot
          guarantee its absolute security.
        </p>
        <br />
        <h3>Changes to This Privacy Policy</h3>
        <br />
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately after they are posted.
        </p>
        <br />
        <h3>Contact Us</h3>
        <br />
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at draperdevelopment@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
