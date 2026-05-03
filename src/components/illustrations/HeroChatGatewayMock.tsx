type HeroChatGatewayMockProps = {
  className?: string;
};

export default function HeroChatGatewayMock({
  className,
}: HeroChatGatewayMockProps) {
  return (
    <div
      className={`relative max-w-full overflow-hidden rounded-3xl border border-border-subtle-light/40 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.2)] ${
        className ?? ""
      }`}
    >
      <div className="space-y-5 p-3 sm:p-4">
        <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle-light/30 bg-white px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-text-primary-light">
                NodeX Workspace
              </span>
              <span className="rounded-full border border-border-subtle-light/30 bg-elevated-light/70 px-2 py-0.5 text-xs font-semibold text-text-secondary-light">
                EU
              </span>
            </div>
            <div className="flex min-w-[220px] flex-col gap-1 rounded-xl border border-border-subtle-light/30 bg-elevated-light/60 px-3 py-2 text-xs text-text-secondary-light">
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-[0.2em]">Model</span>
                <span className="text-text-primary-light">
                  Auto (Policy-based)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] text-text-muted-light">
                {["Gemini", "OpenAI", "Llama"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-subtle-light/30 bg-white px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-text-muted-light">
          Policy: Data protection ✓
        </div>

        <div className="space-y-3 rounded-2xl border border-border-subtle-light/30 bg-slate-50/70 p-3 sm:p-4">
          <div className="rounded-2xl border border-border-subtle-light/20 bg-white px-4 py-3">
            <p className="text-sm text-text-primary-light">
              Summarize the attached contract and flag PII.
            </p>
          </div>

          <div className="rounded-2xl border border-border-subtle-light/20 bg-white px-4 py-3">
            <p className="text-sm leading-relaxed text-text-primary-light">
              The contract sets a 24-month term with auto-renewal and outlines
              service-level guarantees. It includes net-30 payment terms and
              quarterly milestones.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-border-subtle-light/30 bg-white px-4 py-3 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle-light/30 bg-elevated-light/70 text-text-secondary-light">
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
          </div>
          <input
            type="text"
            placeholder="Send a request…"
            className="flex-1 bg-transparent text-sm text-text-primary-light placeholder:text-text-muted-light focus:outline-none"
          />
          <button className="rounded-full border border-border-subtle-light/30 bg-elevated-light/70 px-5 py-2 text-xs font-semibold text-text-primary-light">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
