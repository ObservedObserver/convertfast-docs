const DEFAULT_SITE_URL = 'https://convertfa.st';
function normalizeSiteUrl(value) {
  const parsed = new URL(String(value || DEFAULT_SITE_URL).trim());
  if (!['https:', 'http:'].includes(parsed.protocol) || parsed.pathname !== '/' || parsed.search || parsed.hash || parsed.username || parsed.password) {
    throw new Error('SITE_URL must be a site origin, without credentials, path, query or fragment.');
  }
  return parsed.origin;
}
const SITE_URL = normalizeSiteUrl(process.env.SITE_URL);
module.exports = { DEFAULT_SITE_URL, SITE_URL, normalizeSiteUrl };
