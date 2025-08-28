export default function LeadershipSection() {
  const leaders = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // CEO portrait
    },
    {
      name: "Michael Lee",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", // CTO portrait
    },
    {
      name: "Emily Carter",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // CFO portrait
    },
    {
      name: "David Kim",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", // COO portrait
    },
  ];

  return (
    <section className="bg-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Leadership
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Meet the people driving our vision forward. With decades of combined
          experience, our leadership team is committed to innovation, growth,
          and delivering value for our clients.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {leader.name}
              </h3>
              <p className="text-gray-500 text-sm">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
