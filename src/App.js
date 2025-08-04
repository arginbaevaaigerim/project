import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Process from "./components/Process";
import Education from "./components/Education";
import Mentors from "./components/Mentors";
import Office from "./components/Office";
import ContactForm from "./components/ContactForm";
import Kakprohditobuthenie from "./components/Kakprohoditobuthenie";
import FormatiObuthenia from "./components/FormatiObuthenia";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutUs />
      <HeroSection />
      <Process />
      <Education />
      <Kakprohditobuthenie/>
      <FormatiObuthenia/>
      <Mentors />
      <Office />
      <ContactForm />
      <Footer/>
    </>
  );
}

export default App;




