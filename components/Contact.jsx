import { restaurant } from "@/data/restaurant";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-[#ff4d6d] uppercase tracking-[3px] font-semibold mb-4">
              Visit Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Experience The Flavor In Person
            </h2>

            <div className="space-y-6 text-gray-300">

              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Address
                </h3>

                <p>{restaurant.address}</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Timings
                </h3>

                <p>{restaurant.timings}</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Contact
                </h3>

                <p>{restaurant.phone}</p>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+919100010203"
                className="bg-[#ff4d6d] hover:bg-[#ff2f57] transition px-8 py-4 rounded-full font-semibold"
              >
                Call Now
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-[#ff4d6d] transition px-8 py-4 rounded-full font-semibold"
              >
                Get Directions
              </a>

            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="overflow-hidden rounded-3xl border border-white/10">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15475.427412537136!2d79.83126365541992!3d14.144512100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce3076e324a93%3A0x261c962b98f3cca3!2sA%20B%20CAFE%20%26%20EATERY!5e0!3m2!1sen!2sin!4v1778814596264!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>

          </div>
        </div>
      </div>
    </section>
  );
}