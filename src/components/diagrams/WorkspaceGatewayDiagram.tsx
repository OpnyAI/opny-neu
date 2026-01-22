type DiagramProps = {
  className?: string;
};

export function WorkspaceGatewayDiagram({ className }: DiagramProps) {
  return (
    <svg
      role="img"
      aria-label="Workspace und Gateway"
      viewBox="0 0 720 420"
      width="100%"
      height="auto"
      className={className}
    >
      <rect
        x="40"
        y="30"
        width="640"
        height="320"
        rx="28"
        fill="rgb(var(--opny-bg-alt))"
        stroke="rgb(var(--opny-border))"
      />

      <rect
        x="70"
        y="60"
        width="260"
        height="210"
        rx="20"
        fill="rgb(var(--opny-surface))"
        stroke="rgb(var(--opny-border))"
      />
      <rect
        x="390"
        y="60"
        width="260"
        height="210"
        rx="20"
        fill="rgb(var(--opny-surface))"
        stroke="rgb(var(--opny-border))"
      />

      <text
        x="200"
        y="95"
        fontSize="14"
        textAnchor="middle"
        fill="rgb(var(--opny-text))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        KI-Workspace
      </text>
      <text
        x="520"
        y="95"
        fontSize="14"
        textAnchor="middle"
        fill="rgb(var(--opny-text))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        KI-Gateway
      </text>

      {[
        "Chat",
        "Assistenten",
        "Projekte",
        "Integrationen",
        "Modellvergleich",
      ].map((item, index) => (
        <g key={item}>
          <circle
            cx="100"
            cy={128 + index * 26}
            r="4"
            fill="rgb(var(--accent))"
          />
          <text
            x="112"
            y={132 + index * 26}
            fontSize="12"
            fill="rgb(var(--text-secondary-light))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {item}
          </text>
        </g>
      ))}

      {[
        "API",
        "Routing",
        "Fallback",
        "RAG",
        "Observability",
      ].map((item, index) => (
        <g key={item}>
          <circle
            cx="420"
            cy={128 + index * 26}
            r="4"
            fill="rgb(var(--accent))"
          />
          <text
            x="432"
            y={132 + index * 26}
            fontSize="12"
            fill="rgb(var(--text-secondary-light))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {item}
          </text>
        </g>
      ))}

      <line
        x1="170"
        y1="300"
        x2="170"
        y2="330"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="550"
        y1="300"
        x2="550"
        y2="330"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="170"
        y1="315"
        x2="550"
        y2="315"
        stroke="rgb(var(--opny-border))"
      />
      <text
        x="360"
        y="370"
        fontSize="13"
        textAnchor="middle"
        fill="rgb(var(--opny-text))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Eine Plattform – zwei Zugänge
      </text>
    </svg>
  );
}
