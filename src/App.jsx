import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import LeadershipSection from "./components/LeadershipSection";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import ServicesSection from "./components/ServicesSection";

export default function App() {
  return (
    <div>
      {/* Navbar and hero section */}
      <div className="flex w-full min-h-screen bg-black shrink-0 flex-col px-2 md:px-0">
        <Navbar />
        <Hero />
      </div>
      <Reviews />
      <InfoSection />
      <FeatureSection />
      <ServicesSection />
      <AboutSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
