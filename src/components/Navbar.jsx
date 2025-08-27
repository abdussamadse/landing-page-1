import Base from "../assets/Base.svg";

export default function Navbar() {
  return (
    <div className="flex w-[1836px] h-[116px] px-[41.728px] pl-[41.272px] pt-[37px] pb-[38px] justify-between items-center shrink-0">
      <div>
        <img src={Base} alt="" />
      </div>
      <div className="flex gap-12 items-center justify-center">
        <ul className="flex gap-[48px]">
          <li className="text-[#D1DCE5] text-center text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Home
          </li>
          <li className="text-[#D1DCE5] text-center text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Templates
          </li>
          <li className="text-[#D1DCE5] text-center text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Price
          </li>
          <li className="text-[#D1DCE5] text-center text-[21px] font-bold leading-[135%] tracking-[-0.21px] cursor-pointer">
            Help
          </li>
        </ul>
        <button className="inline-flex h-[41px] px-[18px] py-[8px] items-center gap-[10px] shrink-0 rounded-[4px] border-2 border-[#FFF] cursor-pointer">
          <p className="text-[#D1DCE5] text-center text-[21px] font-bold leading-[135%] tracking-[-0.21px]">
            Get In Touch
          </p>
        </button>
      </div>
    </div>
  );
}
