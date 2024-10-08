import About from "./About";
import Available from "./Available";
import Contact from "./ContactSec";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TeamSec from "./TeamSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Available />
      <About />
      <CTA />
      <FAQ />
      <TeamSec />
      <Contact />
      <Footer />
    </>
  );
}
