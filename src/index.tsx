import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { HashRouter as Router } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

const AppContainer = () => {
  const [isAppStoreBadgesVisible, setIsAppStoreBadgesVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const appStoreBadges = document.getElementById("app-store-badges");

      if (appStoreBadges) {
        const { top } = appStoreBadges.getBoundingClientRect();
        setIsAppStoreBadgesVisible(top >= 0 && top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Header appStoreBadgesOpacity={isAppStoreBadgesVisible ? 0 : 1} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
