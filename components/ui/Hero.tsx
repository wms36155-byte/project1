export default function HomePage() {
  return (
    <main className="overflow-hidden font-inter">

      {/* HERO */}
      <section className="min-h-[85vh] bg-gradient-to-b from-white via-[#F8FAFF] to-[#EEF2FF] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">

          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 shadow-sm">
            🚀 CAREER OPPORTUNITIES
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Find Your Perfect <span className="text-indigo-600">Career</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Discover career opportunities from top companies. Search, filter,
            and apply to roles that match your skills and aspirations.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Search job title, company, keyword..."
              className="w-full md:flex-1 px-5 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <button className="w-full md:w-auto px-7 py-4 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition">
              Search
            </button>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/jobs"
              className="px-7 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Browse Jobs
            </a>

            <a
              href="/login"
              className="px-7 py-3 rounded-2xl border border-gray-300 text-gray-700 hover:bg-white transition"
            >
              Post a Job
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "500+", label: "Active Jobs" },
              { value: "200+", label: "Companies" },
              { value: "50K+", label: "Placements" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="text-4xl font-bold text-indigo-600">{item.value}</h3>
                <p className="text-gray-500 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE — 2x2 BIG CARDS */}
      <section className="py-24 px-6 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Why Choose JobPortal?
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Everything you need to find and apply for your dream job in one place.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              icon: "🔍",
              title: "Powerful Search",
              desc: "Advanced filtering by job title, category, and more.",
            },
            {
              icon: "⭐",
              title: "Curated Opportunities",
              desc: "Verified companies and high‑quality job listings.",
            },
            {
              icon: "✨",
              title: "User‑Friendly Interface",
              desc: "Clean, intuitive design for effortless job browsing.",
            },
            {
              icon: "⚡",
              title: "Real‑Time Updates",
              desc: "Instant alerts for new job postings that match your profile.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl border bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + 4 STATS */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { value: "500+", label: "Active Job Listings" },
            { value: "200+", label: "Top Companies" },
            { value: "50K+", label: "Successful Placements" },
            { value: "98%", label: "User Satisfaction" },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-indigo-200">{item.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Advance Your Career?
        </h2>

        <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
          Discover hundreds of job opportunities from leading companies. Start your journey to your next role today.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/jobs"
            className="px-7 py-3 bg-white text-indigo-600 font-medium rounded-2xl hover:bg-gray-100 transition"
          >
            Explore Jobs
          </a>

          <a
            href="/login"
            className="px-7 py-3 border border-white rounded-2xl hover:bg-white hover:text-indigo-600 transition"
          >
            Post a Job
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">About JobPortal</h3>
            <p>Your trusted platform for connecting with career opportunities.</p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/jobs" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="/login" className="hover:text-white">Post a Job</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <p>support@jobportal.com</p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-12">
          © 2024 JobPortal. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
