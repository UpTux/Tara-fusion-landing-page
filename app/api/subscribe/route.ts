import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_API_TOKEN = process.env.MAILERLITE_API_TOKEN;
const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!MAILERLITE_API_TOKEN) {
      console.error('MAILERLITE_API_TOKEN is not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    const response = await fetch(MAILERLITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_TOKEN}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('MailerLite API error:', errorData);
      return NextResponse.json(
        { error: errorData.message || `Subscription failed with status ${response.status}` },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Thanks for your interest! We'll notify you at launch." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
