export default function ServicesSection() {
  const cards = [
    {
      title: "Audit",
      description:
        "Comprehensive financial and compliance audits to help businesses ensure accuracy, transparency, and regulatory alignment.",
    },
    {
      title: "Business Strategy",
      description:
        "We provide tailored consulting to identify growth opportunities, optimize operations, and build long-term strategic roadmaps.",
    },
    {
      title: "Technology Solutions",
      description:
        "From digital transformation to custom software, we design solutions that modernize businesses and drive efficiency.",
    },
  ];

  return (
    <section className="bg-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-2xl">
            Empowering businesses with trusted expertise and innovative
            solutions
          </h2>
          <a
            href="#"
            className="text-blue-600 font-medium mt-4 md:mt-0 flex items-center hover:underline"
          >
            Experienced team <span className="ml-1">→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm
                         p-6 flex flex-col justify-between
                         transition-transform duration-300 ease-in-out
                         hover:shadow-lg hover:scale-105"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
              <p className="text-gray-400 text-sm mt-6">Experienced team</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
