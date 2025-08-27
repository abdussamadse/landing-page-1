import { Palette, Code } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-32 mt-10">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transforming Ideas Into Digital Experiences
        </h2>
        <p className="text-gray-600 mb-12">
          We specialize in crafting user-centered designs and developing fast,
          scalable websites. From concept to launch, our goal is to deliver
          solutions that drive results and help your business grow online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-2xl">
              <Palette className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Creative Design
              </h3>
              <p className="text-gray-600 text-sm">
                Our design team focuses on creating visually appealing,
                user-friendly interfaces that enhance brand identity and engage
                your audience effectively.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-2xl">
              <Code className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 text-sm">
                We build responsive, high-performance websites using modern
                technologies, ensuring scalability, security, and seamless user
                experience across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
