import { restaurant } from "@/data/restaurant";
import Image from "next/image";

export default function FeaturedDishes() {
  return (
    <section id="menu" className="py-24 bg-[#111111]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-[#ff4d6d] uppercase tracking-[3px] font-semibold mb-4">
            Featured Dishes
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Food That Keeps People Coming Back
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {restaurant.featuredDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff4d6d] transition"
            >
              <Image
  src={dish.image}
  alt={dish.name}
  width={500}
  height={500}
  className="w-full h-72 object-cover"
/>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {dish.name}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}