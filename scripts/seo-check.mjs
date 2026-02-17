import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { SITE_URL } = require("../site.config.js");

const rootDir = process.cwd();
const errors = [];
const expectedHost = new URL(SITE_URL).host;
const shouldEnforceSiteUrl =
  process.env.ENFORCE_SITE_URL === "true" ||
  (process.env.CI === "true" && process.env.NODE_ENV === "production");

function readFileSafe(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}

function assertNoLegacyHosts(filePath, content) {
  if (!content) return;
  const bannedHosts = ["example.com", "docs.convertfa.st"];
  for (const host of bannedHosts) {
    if (content.includes(host)) {
      errors.push(`${filePath} contains legacy host: ${host}`);
    }
  }
}

function assertNoNoindex(filePath, content) {
  if (!content) return;
  const normalized = content.toLowerCase();
  if (
    normalized.includes('name="robots" content="noindex') ||
    normalized.includes("x-robots-tag") && normalized.includes("noindex")
  ) {
    errors.push(`${filePath} contains noindex directive`);
  }
}

function assertSitemapAndRobots() {
  const robotsPath = path.join(rootDir, "public/robots.txt");
  const sitemapPath = path.join(rootDir, "public/sitemap.xml");
  const sitemap0Path = path.join(rootDir, "public/sitemap-0.xml");

  const robots = readFileSafe(robotsPath);
  const sitemap = readFileSafe(sitemapPath);
  const sitemap0 = readFileSafe(sitemap0Path);

  if (!robots) {
    errors.push("public/robots.txt is missing");
  }
  if (!sitemap) {
    errors.push("public/sitemap.xml is missing");
  }
  if (!sitemap0) {
    errors.push("public/sitemap-0.xml is missing");
  }

  if (robots && !robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
    errors.push("public/robots.txt sitemap does not match SITE_URL");
  }

  if (sitemap && !sitemap.includes(expectedHost)) {
    errors.push("public/sitemap.xml does not include expected host");
  }
  if (sitemap0 && !sitemap0.includes(expectedHost)) {
    errors.push("public/sitemap-0.xml does not include expected host");
  }

  assertNoLegacyHosts("public/robots.txt", robots);
  assertNoLegacyHosts("public/sitemap.xml", sitemap);
  assertNoLegacyHosts("public/sitemap-0.xml", sitemap0);
}

function run() {
  if (shouldEnforceSiteUrl && !process.env.SITE_URL) {
    errors.push(
      "SITE_URL is required when CI production gate is enabled. Set SITE_URL=https://ui.convertfa.st"
    );
  }

  const criticalFiles = [
    "theme.config.tsx",
    "components/home/page.tsx",
    "next-sitemap.config.js",
    "next.config.js",
  ];

  for (const file of criticalFiles) {
    const fullPath = path.join(rootDir, file);
    const content = readFileSafe(fullPath);
    if (!content) {
      errors.push(`${file} is missing`);
      continue;
    }
    // `docs.convertfa.st` is valid inside redirect rules in next.config.js.
    if (file !== "next.config.js") {
      assertNoLegacyHosts(file, content);
    }
    assertNoNoindex(file, content);
    if (file === "next.config.js") {
      if (!content.includes("docs.convertfa.st")) {
        errors.push(
          "next.config.js is missing redirect host rule for docs.convertfa.st"
        );
      }
      if (!content.includes("https://ui.convertfa.st/:path*")) {
        errors.push(
          "next.config.js is missing canonical redirect destination to ui.convertfa.st"
        );
      }
    }
  }

  assertSitemapAndRobots();

  if (errors.length > 0) {
    console.error("[seo:check] Failed with the following issues:");
    for (const issue of errors) {
      console.error(`- ${issue}`);
    }
    process.exit(1);
  }

  console.log(`[seo:check] Passed. Canonical host is ${expectedHost}.`);
}

run();
