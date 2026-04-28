export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-medium text-indigo-700">Now in Public Beta</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
          Ship Faster.
          <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Scale Smarter.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
          The modern platform that helps teams build, deploy, and scale their products with unprecedented speed.
          Stop wasting time on infrastructure — focus on what matters.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Start Free Trial
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            See How It Works
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '10x', label: 'Faster Deploys' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '5,000+', label: 'Teams Trust Us' },
            { value: '< 50ms', label: 'Avg Latency' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/60 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 h-6 bg-gray-100 rounded-md" />
            </div>
            <div className="p-8 grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-3">
                <div className="h-4 bg-indigo-100 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-full" />
                <div className="h-4 bg-gray-100 rounded w-5/6" />
                <div className="h-4 bg-gray-100 rounded w-2/3" />
                <div className="mt-6 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100" />
              </div>
              <div className="space-y-3">
                <div className="h-20 bg-green-50 rounded-xl border border-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-sm font-medium">✓ Deployed</span>
                </div>
                <div className="h-20 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-medium">↑ Scaling</span>
                </div>
                <div className="h-20 bg-purple-50 rounded-xl border border-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-sm font-medium">◉ Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
