import Link from 'next/link';

export const metadata = {
  title: 'Payment Successful — Velocity',
  description: 'Your payment was successful. Welcome to Velocity Pro!',
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Payment Successful!</h1>
        <p className="mt-3 text-gray-600">
          Thank you for purchasing Velocity Pro. You now have access to all Pro features.
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-sm text-gray-500">Amount paid</div>
          <div className="text-2xl font-bold text-gray-900">$29.00</div>
        </div>
        <Link
          href="/"
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
