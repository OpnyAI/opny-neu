type IllustrationProps = {
  className?: string;
};

export default function GatewayDiagram({ className }: IllustrationProps) {
  return (
    <svg
      role="img"
      aria-label="Gateway-Diagramm"
      viewBox="0 0 720 520"
      width="100%"
      height="auto"
      className={className}
    >
      <rect
        x="24"
        y="24"
        width="672"
        height="472"
        rx="32"
        fill="rgb(var(--opny-bg-alt))"
        stroke="rgb(var(--opny-border))"
      />

      <text
        x="60"
        y="56"
        fontSize="12"
        letterSpacing="2"
        fill="rgb(var(--text-secondary-light))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        All LLMs
      </text>

      {[
        { label: "OpenAI", x: 60 },
        { label: "Gemini", x: 270 },
        { label: "Llama", x: 480 },
      ].map((item) => (
        <g key={item.label}>
          <rect
            x={item.x}
            y="70"
            width="180"
            height="56"
            rx="16"
            fill="rgb(var(--opny-surface))"
            stroke="rgb(var(--opny-border))"
          />
          <text
            x={item.x + 90}
            y="104"
            fontSize="14"
            textAnchor="middle"
            fill="rgb(var(--opny-text))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {item.label}
          </text>
        </g>
      ))}

      <line
        x1="150"
        y1="126"
        x2="150"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="360"
        y1="126"
        x2="360"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="570"
        y1="126"
        x2="570"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="150"
        y1="150"
        x2="570"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="360"
        y1="150"
        x2="360"
        y2="170"
        stroke="rgb(var(--opny-border))"
      />

      <rect
        x="60"
        y="170"
        width="600"
        height="110"
        rx="22"
        fill="rgb(var(--opny-surface))"
        stroke="rgb(var(--accent))"
        strokeWidth="1.5"
      />
      <text
        x="360"
        y="205"
        fontSize="14"
        textAnchor="middle"
        fill="rgb(var(--opny-text))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Opny Control Layer
      </text>
      {[
        { label: "Policies", x: 150 },
        { label: "Routing", x: 300 },
        { label: "Observability", x: 450 },
      ].map((item) => (
        <g key={item.label}>
          <rect
            x={item.x}
            y="225"
            width="120"
            height="32"
            rx="14"
            fill="rgb(var(--opny-bg))"
            stroke="rgb(var(--opny-border))"
          />
          <text
            x={item.x + 60}
            y="246"
            fontSize="12"
            textAnchor="middle"
            fill="rgb(var(--text-secondary-light))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {item.label}
          </text>
        </g>
      ))}

      <line
        x1="360"
        y1="280"
        x2="360"
        y2="320"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="150"
        y1="320"
        x2="570"
        y2="320"
        stroke="rgb(var(--opny-border))"
      />
      {[150, 275, 425, 575].map((x) => (
        <line
          key={x}
          x1={x}
          y1="320"
          x2={x}
          y2="350"
          stroke="rgb(var(--opny-border))"
        />
      ))}
      <line
        x1="360"
        y1="320"
        x2="360"
        y2="408"
        stroke="rgb(var(--opny-border))"
      />

      <text
        x="60"
        y="338"
        fontSize="12"
        letterSpacing="2"
        fill="rgb(var(--text-secondary-light))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Teams / Apps
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
            y="350"
            width="130"
            height="52"
            rx="16"
            fill="rgb(var(--opny-surface))"
            stroke="rgb(var(--opny-border))"
          />
          <text
            x={item.x + 65}
            y="382"
            fontSize="13"
            textAnchor="middle"
            fill="rgb(var(--opny-text))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {item.label}
          </text>
        </g>
      ))}

      <rect
        x="170"
        y="408"
        width="380"
        height="56"
        rx="18"
        fill="rgb(var(--opny-surface))"
        stroke="rgb(var(--opny-border))"
      />
      <text
        x="360"
        y="442"
        fontSize="13"
        textAnchor="middle"
        fill="rgb(var(--opny-text))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Data &amp; Analytics
      </text>
    </svg>
  );
}
