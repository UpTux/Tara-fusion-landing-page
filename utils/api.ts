const MAILERLITE_API_TOKEN = import.meta.env.VITE_MAILERLITE_API_TOKEN;
const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';
const MAILERLITE_GROUP = 'Tara-fusion';

/**
 * Subscribes an email address to the MailerLite mailing list.
 * Makes a POST request to the MailerLite API to add a new subscriber.
 *
 * @param email The email address to subscribe.
 * @returns A promise that resolves on success or rejects on failure.
 * @throws Error if the subscription fails or the API returns an error.
 */
export const subscribeEmail = async (email: string): Promise<void> => {
  try {
    const response = await fetch(MAILERLITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_TOKEN}`,
      },
      body: JSON.stringify({
        email
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || 
        `Subscription failed with status ${response.status}`
      );
    }

    console.log(`Successfully subscribed: ${email}`);
  } catch (error) {
    console.error('Subscription error:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to subscribe. Please try again later.');
  }
};
