/* Formspree endpoints. Submissions arrive in the Formspree inbox and are
   emailed to the address set on each form in the Formspree dashboard. */
export const FORMSPREE = {
  quote: 'https://formspree.io/f/maeqkakg',      /* short quote request, shown on most pages */
  contact: 'https://formspree.io/f/xeaedvwe',    /* full request on the Contact page */
  newsletter: 'https://formspree.io/f/moejbyze', /* newsletter signup (footer and Insights) */
};

/* POST JSON to Formspree. Resolves true on success, false otherwise. */
export async function sendToFormspree(url, data) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}
