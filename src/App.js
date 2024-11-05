
import './App.css';
import AboutSection from './components/AboutSection';
import AdvantagesSection from './components/AdvantagesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import MembershipSection from './components/MembershipSection';
import TrainersSection from './components/TrainersSection';

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <AdvantagesSection />
      <MembershipSection />
      <AboutSection />
      <TrainersSection />
      <Footer />
    </div>
  );
}

export default App;
