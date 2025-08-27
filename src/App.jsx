import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

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
    </div>
  );
}
