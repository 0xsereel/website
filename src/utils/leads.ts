interface SubmitLeadOptions {
  /** Custom intake endpoint (e.g. VITE_ISSUER_INTAKE_URL). Falls back to Web3Forms when unset. */
  endpoint?: string;
  /** Only used on the Web3Forms fallback path. */
  subject: string;
  payload: Record<string, unknown>;
}

/**
 * Web3Forms expects flat, form-like fields — arrays and nested objects don't
 * survive its submission format, so they're flattened here before posting.
 * A custom endpoint receives the payload untouched.
 */
function flattenForWeb3Forms(payload: Record<string, unknown>): Record<string, unknown> {
  const flat: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(payload)) {
    if (key === "utm" && value && typeof value === "object") {
      const utm = value as Record<string, string | undefined>;
      if (utm.source) flat.utm_source = utm.source;
      if (utm.medium) flat.utm_medium = utm.medium;
      if (utm.campaign) flat.utm_campaign = utm.campaign;
      continue;
    }
    if (Array.isArray(value)) {
      flat[key] = value.join(", ");
      continue;
    }
    flat[key] = value;
  }

  return flat;
}

/**
 * Posts a lead to `endpoint` when set, else to the shared Web3Forms inbox so
 * no submission is ever lost. Throws on any non-2xx response, and on the
 * Web3Forms path also throws if the response body doesn't report success.
 */
export async function submitLead({ endpoint, subject, payload }: SubmitLeadOptions): Promise<void> {
  const response = endpoint
    ? await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
    : await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject,
          ...flattenForWeb3Forms(payload),
        }),
      });

  if (!response.ok) throw new Error(String(response.status));

  if (!endpoint) {
    const data = (await response.json().catch(() => null)) as { success?: boolean } | null;
    if (!data?.success) throw new Error("web3forms_failure");
  }
}
