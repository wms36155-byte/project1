const features = [
  {
    icon: "🔍",
    title: "Powerful Search",
    description:
      "Advanced filtering by job title, category, and more. Find exactly what you're looking for in seconds.",
  },
  {
    icon: "⭐",
    title: "Curated Opportunities",
    description:
      "Carefully selected job postings from verified companies across industries and experience levels.",
  },
  {
    icon: "✨",
    title: "User-Friendly Interface",
    description:
      "Intuitive design makes job hunting simple and enjoyable. Browse, filter, and explore with ease.",
  },
  {
    icon: "⚡",
    title: "Real-Time Updates",
    description:
      "Instant notifications for new job postings. Never miss an opportunity that matches your profile.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-fuchsia-50 px-4 py-24">
      
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
            Why Choose Us
          </p>

          <h2 className="mb-5 text-5xl font-extrabold leading-tight text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
              JobPortal?
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
            We&apos;ve designed the most intuitive job search platform to help
            you discover opportunities that perfectly align with your career
            goals and ambitions.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-violet-100 bg-white/80 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-4xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-violet-700">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}