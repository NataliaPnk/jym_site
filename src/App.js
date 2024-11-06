import { useRef, useState } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import AdvantagesSection from "./components/AdvantagesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import MembershipSection from "./components/MembershipSection";
import TrainersSection from "./components/TrainersSection";
import { advantagesData } from "./data/advantagesData";
import { Context } from "./context";
import { membershipData } from "./data/membershipData";
import { trainersData } from "./data/trainersData";

function App() {
  const [advantages, setAdvantages] = useState(advantagesData);
  const [memberships, setMemberships] = useState(membershipData);
  const [trainers, setTrainers] = useState(trainersData);

  const mainRef = useRef(null);
  const advantagesRef = useRef(null);
  const membershipRef = useRef(null);
  const aboutRef = useRef(null);
  const trainersRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "main":
        mainRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "advantages":
        advantagesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "membership":
        membershipRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "trainers":
        trainersRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Context.Provider value={{ advantages, memberships, trainers }}>
        <Header onNavigate={scrollToSection} />
        <MainSection ref={mainRef} />
        <AdvantagesSection ref={advantagesRef} />
        <MembershipSection ref={membershipRef} />
        <AboutSection ref={aboutRef} />
        <TrainersSection ref={trainersRef} />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
