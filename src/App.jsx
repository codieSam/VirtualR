import "./App.css";
import Copyright from "./components/Copyright";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testinomials from "./components/Testinomials";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testinomials />
      <hr className="mx-[100px] mb-10" />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
