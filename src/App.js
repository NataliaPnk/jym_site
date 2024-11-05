import { useState } from "react";
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

const [ advantages, setAdvantages ] = useState(advantagesData)
const [ memberships, setMemberships ] = useState(membershipData)
const [ trainers, setTrainers ] = useState(trainersData)



  return (
    <div>
      <Context.Provider value={{ advantages, memberships, trainers }}>
      <Header />
      <MainSection />
      <AdvantagesSection />
      <MembershipSection />
      <AboutSection />
      <TrainersSection />
      <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
