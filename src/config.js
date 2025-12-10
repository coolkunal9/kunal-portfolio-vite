/* src/config.js
   Site-wide config; reads from Vite env variables (VITE_ prefix).
   Put real keys in .env.local (never commit).
*/

export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "your-email@example.com";
export const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
export const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
export const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
