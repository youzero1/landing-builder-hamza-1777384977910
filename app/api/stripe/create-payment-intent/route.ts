import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: 'Stripe secret key is not configured' },
      { status: 500 }
    );
  }

  // Dynamic import so the module is not evaluated at build time
  // (which would throw "Neither apiKey nor config.authenticator provided")
  const Stripe = (await import('stripe')).default;
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2024-11-20.acacia' as any,
  });

  try {
    const { amount, currency } = await request.json();

    if (!amount || !currency) {
      return NextResponse.json(
        { error: 'Missing amount or currency' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
