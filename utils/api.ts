/**
 * Simulates an API call to subscribe an email address.
 * In a real application, this function would make a fetch request to a backend endpoint.
 *
 * Example with a real endpoint (e.g., a serverless function):
 *
 * export const subscribeEmail = async (email: string): Promise<void> => {
 *   const response = await fetch('/api/subscribe', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ email }),
 *   });
 *
 *   if (!response.ok) {
 *     const errorData = await response.json();
 *     throw new Error(errorData.message || 'Subscription failed.');
 *   }
 * };
 *
 * @param email The email address to subscribe.
 * @returns A promise that resolves on success or rejects on failure.
 */
export const subscribeEmail = (email: string): Promise<void> => {
  console.log(`Subscribing email: ${email}`);
  
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate a random failure to test error handling
      if (email.includes('fail')) {
        reject(new Error('This email address is blocked.'));
      } else {
        resolve();
      }
    }, 1500);
  });
};
