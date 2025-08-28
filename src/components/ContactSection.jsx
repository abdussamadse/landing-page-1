import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 mt-20">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://www.hubspot.com/hubfs/media/customerservice.jpeg" // Random tech-related image
          alt="Modern workspace with gadgets"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simplify Your Smart Home Setup
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl">
          Control lights, play music, manage tasks, and connect all your devices
          with ease using the latest smart home assistant. Experience
          convenience like never before.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
