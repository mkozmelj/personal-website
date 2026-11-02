import posthog from "posthog-js";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

// Production builds only, so `next dev` visits stay out of the stats
if (token && process.env.NODE_ENV === "production") {
  posthog.init(token, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: "2026-08-30",
    // No cookies or browser storage, so the site needs no consent banner
    cookieless_mode: "always",
    person_profiles: "never",
  });
}
