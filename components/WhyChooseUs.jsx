import { restaurant } from "@/data/restaurant";

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-[#ff4d6d] uppercase tracking-[3px] font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A Place Made For Food Lovers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {restaurant.features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#161616] border border-white/10 rounded-2xl p-6 text-center hover:border-[#ff4d6d] transition"
            >
              <h3 className="font-semibold text-lg">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}