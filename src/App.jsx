import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      {/* Navbar and hero section */}
      <div className="flex w-full h-[933px] bg-black shrink-0">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
