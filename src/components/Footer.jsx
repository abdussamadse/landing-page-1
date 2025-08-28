export default function Footer() {
  return (
    <footer className="w-full bg-white border-t py-4 px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
      {/* Left side */}
      <p className="mb-2 md:mb-0">© 2019-2021 All Rights Reserved.</p>

      {/* Right side */}
      <a href="#" className="text-gray-800 hover:text-blue-600 transition">
        Terms of Service
      </a>
    </footer>
  );
}
