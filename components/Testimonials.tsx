const testimonials = [
  {
    quote: 'Velocity cut our deployment time from 12 minutes to under 30 seconds. Our team ships features twice as fast now.',
    name: 'Sarah Chen',
    role: 'CTO at Flowbase',
    avatar: 'SC',
  },
  {
    quote: 'The DX is phenomenal. Preview deployments on every PR changed how our team reviews code. Absolutely game-changing.',
    name: 'Marcus Johnson',
    role: 'Lead Engineer at Stackly',
    avatar: 'MJ',
  },
  {
    quote: 'We migrated 40+ microservices to Velocity in a weekend. The auto-scaling has saved us thousands in infrastructure costs.',
    name: 'Elena Rodriguez',
    role: 'VP Engineering at Dataform',
    avatar: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by engineering teams
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of teams who trust Velocity to power their production infrastructure.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-semibold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
