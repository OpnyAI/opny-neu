type HeroGatewayDiagramProps = {
  className?: string;
};

export default function HeroGatewayDiagram({
  className,
}: HeroGatewayDiagramProps) {
  return (
    <div
      className={`rounded-3xl border border-border-subtle-light/40 bg-white shadow-card-light ${
        className ?? ""
      }`}
    >
      <svg
        role="img"
        aria-label="Opny AI Gateway Architekturdiagramm"
        viewBox="0 0 720 520"
        width="100%"
        height="auto"
        className="h-auto w-full"
      >
        <g>
          <rect
            x="24"
            y="24"
            width="672"
            height="472"
            rx="28"
            fill="white"
            stroke="rgb(var(--opny-border))"
          />

          <text
            x="48"
            y="64"
            fontSize="12"
            letterSpacing="2"
            fill="rgb(var(--text-secondary-light))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            AI MODELS
          </text>
        </g>

        <g>
          {[
            { label: "OpenAI", x: 60 },
            { label: "Gemini", x: 270 },
            { label: "Llama", x: 480 },
          ].map((item) => (
            <g key={item.label}>
              <rect
                x={item.x}
                y="78"
                width="180"
                height="56"
                rx="16"
                fill="rgb(var(--opny-surface))"
                stroke="rgb(var(--opny-border))"
              />
              <text
                x={item.x + 90}
                y="112"
                fontSize="14"
                textAnchor="middle"
                fill="rgb(var(--opny-text))"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                {item.label}
              </text>
            </g>
          ))}
        </g>

        <g>
          <line
            x1="150"
            y1="134"
            x2="150"
            y2="158"
            stroke="rgb(var(--opny-border))"
          />
          <line
            x1="360"
            y1="134"
            x2="360"
            y2="158"
            stroke="rgb(var(--opny-border))"
          />
          <line
            x1="570"
            y1="134"
            x2="570"
            y2="158"
            stroke="rgb(var(--opny-border))"
          />
          <line
            x1="150"
            y1="158"
            x2="570"
            y2="158"
            stroke="rgb(var(--opny-border))"
          />
          <line
            x1="360"
            y1="158"
            x2="360"
            y2="184"
            stroke="rgb(var(--opny-border))"
          />
        </g>

        <g>
          <rect
            x="60"
            y="184"
            width="600"
            height="116"
            rx="22"
            fill="rgb(var(--opny-surface))"
            stroke="rgb(var(--opny-border))"
          />
          <text
            x="360"
            y="218"
            fontSize="14"
            textAnchor="middle"
            fill="rgb(var(--opny-text))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            Opny AI Gateway
          </text>

          {[
            { label: "Policies", x: 150 },
            { label: "Routing", x: 300 },
            { label: "Observability", x: 450 },
          ].map((item) => (
            <g key={item.label}>
              <rect
                x={item.x}
                y="238"
                width="120"
                height="32"
                rx="16"
                fill="white"
                stroke="rgb(var(--opny-border))"
              />
              <text
                x={item.x + 60}
                y="259"
                fontSize="12"
                textAnchor="middle"
                fill="rgb(var(--text-secondary-light))"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                {item.label}
              </text>
            </g>
          ))}
        </g>

        <g>
          <line
            x1="360"
            y1="300"
            x2="360"
            y2="332"
            stroke="rgb(var(--opny-border))"
          />
          <line
            x1="150"
            y1="332"
            x2="570"
            y2="332"
            stroke="rgb(var(--opny-border))"
          />
          {[150, 275, 425, 575].map((x) => (
            <line
              key={x}
              x1={x}
              y1="332"
              x2={x}
              y2="364"
              stroke="rgb(var(--opny-border))"
            />
          ))}
        </g>

        <g>
          <text
            x="48"
            y="354"
            fontSize="12"
            letterSpacing="2"
            fill="rgb(var(--text-secondary-light))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            TEAMS & APPS
          </text>

          {[
            { label: "Product", x: 60 },
            { label: "Ops", x: 210 },
            { label: "Compliance", x: 360 },
            { label: "Finance", x: 510 },
          ].map((item) => (
            <g key={item.label}>
              <rect
                x={item.x}
                y="368"
                width="150"
                height="56"
                rx="16"
                fill="rgb(var(--opny-surface))"
                stroke="rgb(var(--opny-border))"
              />
              <text
                x={item.x + 75}
                y="402"
                fontSize="13"
                textAnchor="middle"
                fill="rgb(var(--opny-text))"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                {item.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
