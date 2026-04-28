const steps = [
  {
    step: '01',
    title: 'Connect Your Repo',
    description: 'Link your GitHub, GitLab, or Bitbucket repository in a single click. We auto-detect your framework.',
  },
  {
    step: '02',
    title: 'Configure & Deploy',
    description: 'Set environment variables, choose your region, and hit deploy. Your app is live in under 30 seconds.',
  },
  {
    step: '03',
    title: 'Monitor & Scale',
    description: 'Watch real-time metrics as traffic grows. Velocity auto-scales infrastructure to meet demand.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Three steps to production
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Go from code to production in minutes, not hours.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-200 to-transparent" />
              )}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
