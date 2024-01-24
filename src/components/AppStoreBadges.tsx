import React from "react";
import GooglePlayBadge from "./GooglePlayBadge";
import appStoreBadge from "../images/appStoreBadge.svg";

interface AppStoreBadgesProps {
  height: string;
  maxHeight?: string;
}

const AppStoreBadges: React.FC<AppStoreBadgesProps> = (props) => {
  const appStoreBadgeStyle: React.CSSProperties = {
    height: props.height,
    pointerEvents: "none",
    maxHeight: props.maxHeight || "80px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1vw",
      }}
    >
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <GooglePlayBadge style={appStoreBadgeStyle} />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          className="badge"
          src={appStoreBadge}
          alt="app store badge"
          style={appStoreBadgeStyle}
        />
      </a>
    </div>
  );
};

export default AppStoreBadges;
