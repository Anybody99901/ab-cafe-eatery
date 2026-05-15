export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-white/10 z-50 md:hidden">
      <div className="grid grid-cols-3">
        <a
          href="tel:+919100010203"
          className="py-4 text-center font-semibold border-r border-white/10"
        >
          Call
        </a>

        <a
          href="https://maps.google.com"
          target="_blank"
          className="py-4 text-center font-semibold border-r border-white/10"
        >
          Directions
        </a>

        <a
          href="https://wa.me/919100010203"
          target="_blank"
          className="py-4 text-center font-semibold text-[#ff4d6d]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}