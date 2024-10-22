import { useState } from "react";
import "./App.css";

import MainDisplay from "./Components/MainDisplay";
import Projects from "./Components/Projects";
import Header from "./Components/Header";
import Contact from "./Components/ContactSection/Contact";
import AboutSection from "./Components/AboutSection/AboutSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isMainDisplayOpen, setMainDisplayOpen] = useState(true);
  const [isProjectTabOpen, setProjectTabOpen] = useState(false);
  const [isContactTab, setContactTab] = useState(false);
  const [isAboutTabOpen, setAboutTabOpen] = useState(false);
  const [aboutText, setAboutText] = useState("Hi, I'm Andrei");

  const notify = () => toast("Thank you for your message");

  const goToAboutTab = () => {
    setAboutTabOpen(true);
    setMainDisplayOpen(false);
    setProjectTabOpen(false);
    setContactTab(false);
    setAboutText("Hi, I'm Andrei");
  };

  const goToContactTab = () => {
    setMainDisplayOpen(false);
    setProjectTabOpen(false);
    setAboutTabOpen(false);
    setContactTab(true);
    setAboutText("Contact");
  };

  const goToMainDisplay = () => {
    setMainDisplayOpen(true);
    setAboutTabOpen(false);
    setProjectTabOpen(false);
    setContactTab(false);
    setAboutText("Hi, I'm Andrei");
  };

  const goToProjectsTab = () => {
    setProjectTabOpen(true);
    setAboutTabOpen(false);
    setMainDisplayOpen(false);
    setContactTab(false);
    setAboutText("Highlights");
  };

  return (
    <>
      {isMainDisplayOpen && (
        <MainDisplay
          goToContactTab={goToContactTab}
          aboutText={aboutText}
        />
      )}
      {isAboutTabOpen && (
        <AboutSection
          goToContactTab={goToContactTab}
          aboutText={aboutText}
        />
      )}
      {isProjectTabOpen && (
        <Projects
          goToContactTab={goToContactTab}
          aboutText={aboutText}
        />
      )}
      {isContactTab && (
        <Contact
          notify={notify}
          isContactTab={isContactTab}
          aboutText={aboutText}
        />
      )}
      <Header
        isAboutTabOpen={isAboutTabOpen}
        goToAboutTab={goToAboutTab}
        goToMainDisplay={goToMainDisplay}
        goToProjectsTab={goToProjectsTab}
        goToContactTab={goToContactTab}
        isContactTab={isContactTab}
        isMainDisplayOpen={isMainDisplayOpen}
        isProjectTabOpen={isProjectTabOpen}
      />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme="dark"
      />
    </>
  );
}

export default App;
