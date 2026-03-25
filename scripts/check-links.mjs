/**
 * Static link checker.
 * Scans component source files for `url:` string values and validates each one:
 *   - Is a well-formed URL (via new URL())
 *   - Uses the https: scheme
 *
 * This runs without making any external HTTP requests, so it is deterministic
 * and safe to include in CI.
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const COMPONENT_DIRS = ["app/components", "app"];
const EXTENSIONS = new Set([".tsx", ".ts", ".mjs", ".js"]);

/** Recursively collect source files under a directory. */
function collectFiles(dir) {
  const abs = join(ROOT, dir);
  let files = [];
  try {
    for (const entry of readdirSync(abs)) {
      const full = join(abs, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        files = files.concat(collectFiles(join(dir, entry)));
      } else if (EXTENSIONS.has(extname(entry))) {
        files.push(full);
      }
    }
  } catch {
    // directory may not exist — skip
  }
  return files;
}

/** Extract values of `url:` properties from source text. */
function extractUrls(source) {
  // Matches:  url: "..."  or  url: '...'
  const re = /\burl\s*:\s*["']([^"']+)["']/g;
  const found = [];
  let m;
  while ((m = re.exec(source)) !== null) {
    found.push(m[1]);
  }
  return found;
}

const files = COMPONENT_DIRS.flatMap(collectFiles);
const failures = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const urls = extractUrls(source);
  for (const raw of urls) {
    // Skip internal paths (e.g. "/example-report")
    if (raw.startsWith("/")) continue;

    let parsed;
    try {
      parsed = new URL(raw);
    } catch {
      failures.push(`${file}: malformed URL → ${raw}`);
      continue;
    }

    if (parsed.protocol !== "https:") {
      failures.push(`${file}: URL must use https: → ${raw}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Link check failed:\n  " + failures.join("\n  "));
  process.exit(1);
}

console.log(`Link check passed — validated ${files.length} file(s).`);
