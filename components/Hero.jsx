import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="AB Cafe Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container-custom relative z-10 pt-32">
        <div className="max-w-2xl">

          <p className="text-[#ff4d6d] font-semibold uppercase tracking-[4px] mb-4">
            Gudur’s Favorite Food Spot
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {restaurant.tagline}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {restaurant.description}
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#menu"
              className="bg-[#ff4d6d] hover:bg-[#ff2f57] transition px-8 py-4 rounded-full font-semibold"
            >
              View Menu
            </a>

            <a
              href="tel:+919100010203"
              className="border border-white/20 hover:border-[#ff4d6d] transition px-8 py-4 rounded-full font-semibold"
            >
              Call Restaurant
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}