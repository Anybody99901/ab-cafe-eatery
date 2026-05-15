export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div>
          <h2 className="text-xl font-bold">
            AB Cafe & Eatery
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Bold flavors and unforgettable dining experiences.
          </p>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 AB Cafe & Eatery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}