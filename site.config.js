const DEFAULT_SITE_URL = "https://ui.convertfa.st";

function normalizeSiteUrl(url) {
  return String(url || "")
    .trim()
    .replace(/\/+$/, "");
}

const envSiteUrl = normalizeSiteUrl(process.env.SITE_URL);
const SITE_URL = envSiteUrl || DEFAULT_SITE_URL;
const shouldEnforceSiteUrl =
  process.env.ENFORCE_SITE_URL === "true" ||
  (process.env.CI === "true" && process.env.NODE_ENV === "production");

if (shouldEnforceSiteUrl && !envSiteUrl) {
  throw new Error(
    "[SEO] SITE_URL is required in production. Example: SITE_URL=https://ui.convertfa.st"
  );
}

if (!envSiteUrl) {
  console.warn(
    `[SEO] SITE_URL is not set. Falling back to default: ${DEFAULT_SITE_URL}`
  );
}

module.exports = {
  DEFAULT_SITE_URL,
  SITE_URL,
  normalizeSiteUrl,
};
