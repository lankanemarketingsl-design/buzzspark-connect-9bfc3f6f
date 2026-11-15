import content from "./privacyPolicyContent.json";

export const privacyPolicyContent = content;
export const UNSUBSCRIBE_REMOVAL_DAYS = 7;
export const UNSUBSCRIBE_EMAIL = "buzzunsubscribe@gmail.com";
export const unsubscribeSubject = "Please unsubscribe me";
export const unsubscribeBody = "Hi Buzz Connect,\n\nPlease remove me from your messages.\n\nEmail: \nMobile: \nPlease stop: Email / SMS / WhatsApp / All messages\n\nThank you.";
export const unsubscribeEmailText = `To: ${UNSUBSCRIBE_EMAIL}\nSubject: ${unsubscribeSubject}\n\n${unsubscribeBody}`;
export const unsubscribeMailto = `mailto:${UNSUBSCRIBE_EMAIL}?subject=${encodeURIComponent(unsubscribeSubject)}&body=${encodeURIComponent(unsubscribeBody)}`;

export function privacyPolicyStaticHtml() {
  return `<main><h1>Privacy Policy</h1><p>Last updated: 15 November 2026</p>${content.intro}<aside><h2>In short</h2>${content.summary}</aside>${content.sections.map(section => `<section id="${section.id}"><h2>${section.heading}</h2>${section.html}</section>`).join("")}</main>`;
}