export default function Hero() {
  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-white to-[#F5F7FB] flex items-center justify-center px-6">

      <div className="text-center max-w-3xl">

        {/* BADGE */}
        <p className="inline-block px-4 py-1 rounded-full text-[#b86122] text-sm font-medium mb-6">
          CAREER OPPORTUNITIES
        </p>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#111827] leading-tight">
          Find Your Perfect{" "}
          <span className="text-[#4F46E5]">Career</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
          Discover career opportunities from top companies. Search, filter,
          and apply to roles that match your skills and aspirations.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-3">

          <input
            type="text"
            placeholder="Search by job title, company, or keyword..."
            className="w-full md:flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />

          <button className="w-full md:w-auto bg-[#4F46E5] text-white px-6 py-3 rounded-xl hover:bg-[#4338CA] transition">
            Search
          </button>

        </div>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-3 justify-center">

          <a
            href="/jobs"
            className="bg-[#4F46E5] text-white px-6 py-3 rounded-xl hover:bg-[#4338CA] transition"
          >
            Browse All Jobs
          </a>

          <a
            href="/login"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-white transition"
          >
            Post a Job
          </a>

        </div>

      </div>
    </section>
  );
}