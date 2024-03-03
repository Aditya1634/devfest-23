import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import DevfestIntro from "./components/DevfestIntro";
import AdvocateAndAudience from "./components/AdvocateAndAudience/AdvocateAndAudience";
import StartupAndDiversity from "./components/StartupAndDiversity";
import Footer from "./components/Footer";
import "./App.css";
import PricingSection from "./components/PricingSection";
import Venue from "./components/Venue";
import EcosystemPartner from "./components/EcosystemPartner";
import CommunityPartner from "./components/CommunityPartner";
import {Schedule} from "./components/schedule/Schedule";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="hero">
          <Header />
          <LandingPage />
        </div>
        <DevfestIntro />
        <AdvocateAndAudience />
        <StartupAndDiversity />
        <EcosystemPartner />
        <PricingSection />
        <Venue />
        <Schedule />
        <CommunityPartner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
