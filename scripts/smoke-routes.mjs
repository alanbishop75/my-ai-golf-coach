const defaultBaseUrl = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000";

const checks = [
  {
    path: "/",
    requiredSnippets: ["Stop guessing. Start fixing."],
  },
  {
    path: "/assessment",
    requiredSnippets: ["Driving", "Bit of everything"],
  },
  {
    path: "/example-report",
    requiredSnippets: ["Direct Example Report", "Premium Driver Diagnosis Preview"],
  },
];

async function fetchPage(url) {
  const response = await fetch(url, {
    headers: {
      "cache-control": "no-cache",
    },
  });

  const body = await response.text();
  return { response, body };
}

export async function runSmokeTests(baseUrl = defaultBaseUrl) {
  const failures = [];

  for (const check of checks) {
    const url = `${baseUrl}${check.path}`;
    try {
      const { response, body } = await fetchPage(url);
      if (!response.ok) {
        failures.push(`${check.path}: expected HTTP 2xx, got ${response.status}`);
        continue;
      }

      for (const snippet of check.requiredSnippets) {
        if (!body.includes(snippet)) {
          failures.push(`${check.path}: missing snippet \"${snippet}\"`);
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push(`${check.path}: request failed (${message})`);
    }
  }

  if (failures.length > 0) {
    throw new Error(`Smoke tests failed:\n- ${failures.join("\n- ")}`);
  }

  console.log(`Smoke tests passed against ${baseUrl}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runSmokeTests().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    process.exit(1);
  });
}
