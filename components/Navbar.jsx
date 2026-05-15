export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="container-custom flex items-center justify-between py-4">
        <h1 className="text-xl font-bold tracking-wide text-white">
          AB Cafe & Eatery
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#menu" className="hover:text-[#ff4d6d] transition">
            Menu
          </a>

          <a href="#gallery" className="hover:text-[#ff4d6d] transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-[#ff4d6d] transition">
            Contact
          </a>
        </nav>

        <a
          href="tel:+919100010203"
          className="bg-[#ff4d6d] hover:bg-[#ff2f57] transition px-4 py-2 rounded-full text-sm font-semibold"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}