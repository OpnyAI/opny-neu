export const contactInterests = [
  "AuthenticTrust Demo",
  "NodeX Einsatz",
  "KI-Beratung",
  "KI-Schulung",
  "KI-Governance-Check",
  "Allgemeine Anfrage",
] as const;

export function normalizeContactInterest(value: string) {
  const legacy: Record<string, string> = {
    "TrustArch Demo": "AuthenticTrust Demo",
    "KI-Beratung Automotive": "KI-Beratung",
    "KI-Schulung Automotive": "KI-Schulung",
  };
  return legacy[value] ?? value;
}
