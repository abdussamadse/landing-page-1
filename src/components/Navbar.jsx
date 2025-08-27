import Base from "../assets/Base.svg";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex w-full max-w-[1836px] h-[80px] md:h-[116px] px-4 md:px-[41.728px] py-4 md:py-[37px] justify-between items-center shrink-0 mx-auto relative">
      <div>
        <img src={Base} alt="Logo" className="h-8 md:h-auto" />
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-[#D1DCE5]"></span>
        <span className="block w-6 h-0.5 bg-[#D1DCE5]"></span>
        <span className="block w-6 h-0.5 bg-[#D1DCE5]"></span>
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 items-center justify-center">
        <ul className="flex gap-8 md:gap-12 items-center">
          <li className="text-[#D1DCE5] text-center text-[16px] md:text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Home
          </li>
          <li className="text-[#D1DCE5] text-center text-[16px] md:text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Templates
          </li>
          <li className="text-[#D1DCE5] text-center text-[16px] md:text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Price
          </li>
          <li className="text-[#D1DCE5] text-center text-[16px] md:text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Help
          </li>
        </ul>
        <button className="inline-flex h-[38px] md:h-[41px] px-3 md:px-4 py-2 items-center gap-2 rounded-[4px] border-2 border-[#FFF] cursor-pointer">
          <p className="text-[#D1DCE5] text-center text-[16px] md:text-[18px] font-bold leading-[135%] tracking-[-0.21px]">
            Get In Touch
          </p>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0b0b] flex flex-col items-center py-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 w-full items-center">
            <li className="text-[#D1DCE5] text-center text-[18px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer w-full py-2">
              Home
            </li>
            <li className="text-[#D1DCE5] text-center text-[18px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer w-full py-2">
              Templates
            </li>
            <li className="text-[#D1DCE5] text-center text-[18px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer w-full py-2">
              Price
            </li>
            <li className="text-[#D1DCE5] text-center text-[18px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer w-full py-2">
              Help
            </li>
          </ul>
          <button className="mt-4 inline-flex h-[40px] px-4 py-2 items-center gap-2 rounded-[4px] border-2 border-[#FFF] cursor-pointer">
            <p className="text-[#D1DCE5] text-center text-[18px] font-bold leading-[135%] tracking-[-0.21px]">
              Get In Touch
            </p>
          </button>
        </div>
      )}
    </nav>
  );
}
