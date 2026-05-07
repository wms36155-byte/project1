const stats = [
  { number: "500+", label: "Active Job Listings" },
  { number: "200+", label: "Top Companies" },
  { number: "50K+", label: "Successful Placements" },
  { number: "98%", label: "User Satisfaction" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 px-4 py-20">
      
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        
        {/* Heading */}
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
          Trusted by Job Seekers Worldwide
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-base leading-relaxed text-violet-200">
          Our platform has helped thousands of professionals discover amazing
          career opportunities and connect with top companies globally.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-2 text-5xl font-extrabold text-white">
                {stat.number}
              </div>

              <div className="text-sm font-medium text-violet-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}