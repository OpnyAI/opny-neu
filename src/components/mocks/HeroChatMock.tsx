type HeroChatMockProps = {
  className?: string;
};

const modelOptions = ["Gemini", "OpenAI", "Llama"];

/**
 * NOTE:
 * Turbopack/Next can choke on complex Tailwind arbitrary values like:
 * bg-[url('data:image/svg+xml;utf8,<svg ...>')]
 * => We use a safe inline `style={{ backgroundImage: ... }}` for the subtle noise overlay.
 */
const NOISE_DATA_URI =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%20120%20120%27%3E%3Cfilter%20id%3D%27n%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27/%3E%3C/filter%3E%3Crect%20width%3D%27120%27%20height%3D%27120%27%20filter%3D%27url(%23n)%27%20opacity%3D%270.35%27/%3E%3C/svg%3E";

export default function HeroChatMock({ className }: HeroChatMockProps) {
  return (
    <div
      className={[
        "relative mx-auto w-full max-w-[620px] overflow-hidden rounded-2xl",
        "border border-black/5 bg-gradient-to-b from-white to-slate-50/80",
        "shadow-[0_20px_60px_rgba(15,23,42,0.12)]",
        "dark:border-white/10 dark:bg-gradient-to-b dark:from-slate-900/95 dark:to-slate-950",
        "dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]",
        className ?? "",
      ].join(" ")}
    >
      {/* Subtle noise overlay (safe) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage: `url("${NOISE_DATA_URI}")`,
          backgroundSize: "140px 140px",
        }}
      />

      {/* Subtle top highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"
      />

      <div className="relative space-y-4 p-5 sm:p-6">
        {/* Topbar */}
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              opny Workspace
            </span>
            <span className="rounded-full border border-black/10 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
              EU
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:inline dark:text-slate-300">
              Model
            </span>

            {/* Selected */}
            <span className="rounded-full border border-black/15 bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white dark:border-white/10">
              Auto
            </span>

            {/* Inactive model chips (subtle) */}
            <div className="hidden items-center gap-2 sm:flex">
              {modelOptions.map((option) => (
                <span
                  key={option}
                  className="rounded-full border border-black/10 bg-white px-2 py-1 text-[11px] text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle chips (keep minimal) */}
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-400">
          {["Data protection ✓", "Routing: Auto"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-black/10 bg-slate-50 px-3 py-1 dark:border-white/10 dark:bg-white/5"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Conversation surface */}
        <div className="rounded-2xl border border-black/10 bg-white px-4 py-4 dark:border-white/10 dark:bg-white/5">
          <div className="space-y-4">
            {/* User bubble */}
            <div className="flex justify-end">
              <div className="max-w-[78%] rounded-2xl bg-slate-900/95 px-4 py-3 text-sm text-white">
                Fasse diesen Vertrag zusammen und markiere personenbezogene
                Daten.
              </div>
            </div>

            {/* Assistant */}
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
              <div className="max-w-[78%] rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <ul className="list-disc space-y-1 pl-4">
                  <li>Vertragslaufzeit: 24 Monate mit Auto-Verlängerung.</li>
                  <li>Leistungen: definierte SLAs und Support-Fenster.</li>
                  <li>Zahlung: netto 30 Tage, quartalsweise Meilensteine.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  Personenbezogene Daten wurden erkannt und geschützt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
              aria-label="Attach"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M8 12.5l6.3-6.3a3 3 0 014.2 4.2l-7.1 7.1a4.5 4.5 0 01-6.4-6.4l7.1-7.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Nachricht an opny…"
              className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none dark:text-white dark:placeholder:text-slate-400"
            />

            <button
              type="button"
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white dark:border-white/10"
            >
              Send
            </button>
          </div>

          <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
            Policies &amp; Routing automatisch aktiv.
          </div>
        </div>
      </div>
    </div>
  );
}
