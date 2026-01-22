type DiagramProps = {
  className?: string;
};

export function AiGatewayDiagram({ className }: DiagramProps) {
  return (
    <svg
      role="img"
      aria-label="AI Gateway Diagramm"
      viewBox="0 0 720 460"
      width="100%"
      height="auto"
      className={className}
    >
      <rect
        x="28"
        y="24"
        width="664"
        height="412"
        rx="28"
        fill="rgb(var(--opny-bg-alt))"
        stroke="rgb(var(--opny-border))"
      />

      <text
        x="60"
        y="58"
        fontSize="12"
        letterSpacing="2"
        fill="rgb(var(--text-secondary-light))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Modelle
      </text>

      {[
        { label: "OpenAI", x: 60 },
        { label: "Gemini", x: 265 },
        { label: "Llama", x: 470 },
      ].map((item) => (
        <g key={item.label}>
          <rect
            x={item.x}
            y="72"
            width="180"
            height="50"
            rx="16"
            fill="rgb(var(--opny-surface))"
            stroke="rgb(var(--opny-border))"
          />
          <text
            x={item.x + 90}
            y="102"
            fontSize="13"
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
        y1="122"
        x2="150"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="355"
        y1="122"
        x2="355"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="560"
        y1="122"
        x2="560"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="150"
        y1="150"
        x2="560"
        y2="150"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="355"
        y1="150"
        x2="355"
        y2="176"
        stroke="rgb(var(--opny-border))"
      />

      <rect
        x="110"
        y="176"
        width="500"
        height="98"
        rx="20"
        fill="rgb(var(--opny-surface))"
        stroke="rgb(var(--accent))"
        strokeWidth="1.6"
      />
      <text
        x="360"
        y="210"
        fontSize="14"
        textAnchor="middle"
        fill="rgb(var(--opny-text))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Opny AI Gateway
      </text>
      {[
        { label: "Policies", x: 150 },
        { label: "Routing", x: 310 },
        { label: "Observability", x: 470 },
      ].map((item) => (
        <g key={item.label}>
          <rect
            x={item.x}
            y="222"
            width="120"
            height="28"
            rx="14"
            fill="rgb(var(--opny-bg))"
            stroke="rgb(var(--opny-border))"
          />
          <text
            x={item.x + 60}
            y="241"
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
        y1="274"
        x2="360"
        y2="316"
        stroke="rgb(var(--opny-border))"
      />
      <line
        x1="170"
        y1="316"
        x2="550"
        y2="316"
        stroke="rgb(var(--opny-border))"
      />
      {[170, 295, 425, 550].map((x) => (
        <line
          key={x}
          x1={x}
          y1="316"
          x2={x}
          y2="346"
          stroke="rgb(var(--opny-border))"
        />
      ))}

      <text
        x="60"
        y="336"
        fontSize="12"
        letterSpacing="2"
        fill="rgb(var(--text-secondary-light))"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Teams & Apps
      </text>

      {[
        { label: "Product", x: 80 },
        { label: "Ops", x: 230 },
        { label: "Compliance", x: 380 },
        { label: "Finance", x: 530 },
      ].map((item) => (
        <g key={item.label}>
          <rect
            x={item.x}
            y="346"
            width="120"
            height="50"
            rx="16"
            fill="rgb(var(--opny-surface))"
            stroke="rgb(var(--opny-border))"
          />
          <text
            x={item.x + 60}
            y="377"
            fontSize="12"
            textAnchor="middle"
            fill="rgb(var(--opny-text))"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {item.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
