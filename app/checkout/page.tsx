import CheckoutClient from '@/components/CheckoutClient';

export const metadata = {
  title: 'Checkout — Velocity Pro',
  description: 'Complete your purchase of Velocity Pro for $29/month.',
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CheckoutClient />
    </main>
  );
}
