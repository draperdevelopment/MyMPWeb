import React from "react";
import "./App.css";
import member from "./images/member.png";
import debate from "./images/debate.png";
import allMembers from "./images/allMembers.png";
import ImageSection from "./components/ImageSection";
import AppStoreBadges from "./components/AppStoreBadges";
import notifications from "./images/notifications.png";

function App() {
  return (
    <div className="body">
      <div className="titleSection">
        <h1 className="title">Follow MPs and get notified when they vote</h1>
      </div>
      <div
        id="app-store-badges"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <AppStoreBadges height={"12vw"} />
      </div>
      <ImageSection
        title="View Your MP's Profile"
        text="Easily stay up to date with what your MP is doing, including their
            voting record and debates in parliament"
        image={member}
      />
      <ImageSection
        title="Get Notified"
        text="Get notified when your MP votes in parliament"
        image={notifications}
        reverse={true}
      />
      <ImageSection
        title="View Debates"
        text="See your MP's speeches and debates in parliament as it happened"
        image={debate}
      />
      <ImageSection
        title="Follow any MP"
        text="Search for and follow any MP, not just your own"
        image={allMembers}
        reverse={true}
      />
    </div>
  );
}

export default App;
