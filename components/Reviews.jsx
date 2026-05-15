const reviews = [
  {
    name: "Local Food Lover",
    text: "Amazing ambience and delicious food. One of the best places to hang out in Gudur.",
  },

  {
    name: "Happy Customer",
    text: "Chicken dishes were spicy and flavorful. Great experience with friends and family.",
  },

  {
    name: "Food Explorer",
    text: "Nice food menu, quick service, and vibrant atmosphere. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-[#ff4d6d] uppercase tracking-[3px] font-semibold mb-4">
            Customer Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#161616] border border-white/10 rounded-3xl p-8"
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                "{review.text}"
              </p>

              <h3 className="font-semibold text-lg">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}