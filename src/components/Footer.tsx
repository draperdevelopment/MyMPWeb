import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderTop: "0.1px solid #282c34",
    height: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  };

  const linkStyle: React.CSSProperties = {
    color: "inherit",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "0.5vh",
  };

  const textContainerStyle: React.CSSProperties = {
    // width: "70ch",
    display: "inline-block",
    marginLeft: "10vw",
    marginRight: "10vw",
    // display: "flex",
    flexDirection: "column",
    gap: "1vh",
    // backgroundColor: "red",
  };

  return (
    <div style={footerStyle}>
      <div style={textContainerStyle}>
        <Link to="/privacy" style={linkStyle}>
          Privacy Policy
        </Link>
        <br />
        <Link to="/support" style={linkStyle}>
          Support
        </Link>
        <p>© 2024 Draper Development</p>
      </div>
    </div>
  );
};

export default Footer;
