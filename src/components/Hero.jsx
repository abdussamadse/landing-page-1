export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-0 py-12 md:py-0">
      <p className="text-[#FFF] text-center text-[14px] sm:text-[18px] md:text-[26px] font-medium leading-[120%] tracking-[2.86px] uppercase">
        Welcome to our amazing platform
      </p>
      <h1 className="text-[#FFF] max-w-[1120px] text-center text-[28px] sm:text-[36px] md:text-[84px] font-bold leading-[110%] tracking-[-1.2px] md:tracking-[-3.78px] mt-4 md:mt-6 px-2">
        Discover innovative solutions designed to elevate your business and accelerate growth.
      </h1>
      <button className="flex cursor-pointer items-center gap-2 md:gap-[10px] px-4 sm:px-6 md:px-[41px] py-2 sm:py-3 md:py-[18px] rounded-[8px] bg-[#FF4242] mt-8 md:mt-[64px]">
        <p className="text-[#FFF] text-center text-[14px] sm:text-[18px] md:text-[30px] font-bold leading-[120%] tracking-[-0.5px] md:tracking-[-0.9px]">
          Get In Touch
        </p>
      </button>
    </div>
  );
}
