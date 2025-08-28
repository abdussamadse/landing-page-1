export default function AboutSection() {
  return (
    <section className="bg-white py-16 mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Building Trust Through Innovation and Expertise
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-10">
          We are a team of passionate professionals dedicated to helping
          businesses grow with innovative strategies and modern technology. From
          business consulting to digital transformation, we provide solutions
          tailored to your goals and designed for long-term success.
        </p>

        {/* Landscape Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Our team at work"
            className="rounded-lg shadow-md w-full max-w-4xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
