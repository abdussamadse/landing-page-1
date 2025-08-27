export default function InfoSection() {
  return (
    <section className="bg-white py-16 mt-10">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Dedicated to Excellence in Web Development
            </h2>
            <p className="mt-4 text-gray-600">
              Our team of experienced developers specializes in building
              scalable, modern applications. From responsive front-end designs
              to powerful back-end solutions, we deliver products that make an
              impact. We take pride in combining creativity with technical
              expertise to help businesses grow online.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Meet our team
            </a>
          </div>
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              alt="Mountain landscape"
              className="rounded-lg shadow"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="Team member smiling"
              className="rounded-lg shadow"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Building Digital Solutions That Last
            </h2>
            <p className="mt-4 text-gray-600">
              Whether you need a custom website, a web application, or an
              e-commerce platform, we craft digital products that are not only
              beautiful but also reliable and scalable. Our focus is always on
              delivering value and creating solutions that stand the test of
              time.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Explore our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
