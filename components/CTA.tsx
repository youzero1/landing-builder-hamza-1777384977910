export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 px-8 py-16 sm:px-16 sm:py-20 text-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-80 h-80 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to ship faster?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-indigo-100">
              Join 5,000+ teams already building on Velocity. Start your free trial today — no credit card required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-indigo-700 bg-white rounded-xl hover:bg-indigo-50 transition-all shadow-lg"
              >
                Start Free Trial
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
