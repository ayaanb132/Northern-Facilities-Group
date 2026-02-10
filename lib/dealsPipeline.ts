/**
 * Deals pipeline integration — send quote and walkthrough submissions to your app.
 *
 * Configure via env:
 * - DEALS_PIPELINE_WEBHOOK_URL: POST URL (e.g. Zapier, Make, n8n, or your app’s API)
 * - DEALS_PIPELINE_API_KEY: optional auth header (e.g. "Bearer YOUR_KEY" or "Api-Key YOUR_KEY")
 *
 * Payload shape is the same for both sources; use `source: 'walkthrough' | 'quote'` to route.
 */

export type PipelineSource = 'walkthrough' | 'quote';

export interface DealPayload {
  source: PipelineSource;
  /** ISO timestamp */
  submittedAt: string;
  /** For walkthrough: full name; for quote: N/A */
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  propertyType: string;
  /** For walkthrough: square footage band; for quote: N/A */
  squareFootage?: string;
  /** For quote: tier; for walkthrough: N/A */
  tier?: string;
  message?: string;
}

export async function sendToDealsPipeline(payload: DealPayload): Promise<{ ok: boolean; error?: string }> {
  const url = process.env.DEALS_PIPELINE_WEBHOOK_URL;
  const apiKey = process.env.DEALS_PIPELINE_API_KEY;

  if (!url) {
    // No webhook configured — skip silently so existing email flow still works
    return { ok: true };
  }

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (apiKey) {
      headers['Authorization'] = apiKey.startsWith('Bearer ') ? apiKey : `Bearer ${apiKey}`;
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: `${res.status}: ${text}` };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: message };
  }
}
