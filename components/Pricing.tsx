import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and prototyping.',
    features: [
      '3 projects',
      '100 GB bandwidth / mo',
      'Automatic SSL',
      'Community support',
      'Preview deployments',
    ],
    cta: 'Get Started Free',
    href: '#',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams who need more power.',
    features: [
      'Unlimited projects',
      '1 TB bandwidth / mo',
      'Custom domains',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
    ],
    cta: 'Buy Now — $29',
    href: '/checkout',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations.',
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'SLA guarantees',
      '24/7 phone support',
      'SSO & SAML',
      'Audit logs',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
    href: '#',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start for free. Upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-100 scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-500">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
              <Link
                href={plan.href}
                className={`mt-6 w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25'
                    : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
