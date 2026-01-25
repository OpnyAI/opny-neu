import Image from "next/image";

const sidebarLabels = [
  { label: "Dashboard", top: "18%", left: "6%" },
  { label: "Richtlinien", top: "25%", left: "6%" },
  { label: "Routing", top: "32%", left: "6%" },
  { label: "Observability", top: "39%", left: "6%" },
  { label: "Audit Log", top: "46%", left: "6%" },
  { label: "Einstellungen", top: "53%", left: "6%" },
];

const tabLabels = [
  { label: "Richtlinien", top: "21%", left: "40%" },
  { label: "Routing", top: "21%", left: "54%" },
  { label: "Observability", top: "21%", left: "68%" },
];

const kpiLabels = [
  { label: "Anfragen (24h)", top: "37%", left: "39%" },
  { label: "Durchschnittliche Latenz", top: "37%", left: "55%" },
  { label: "Fehlerrate", top: "37%", left: "72%" },
  { label: "Kosten (heute)", top: "37%", left: "84%" },
];

const chartLabels = [
  { label: "Anfragevolumen", top: "58%", left: "39%" },
  { label: "Modellverteilung", top: "58%", left: "63%" },
];

const rightPanelLabels = [
  { label: "Aktive Modelle", top: "24%", left: "81%" },
  { label: "Aktive Teams", top: "46%", left: "81%" },
];

const modelLabels = [
  { label: "OpenAI", top: "30%", left: "81%" },
  { label: "Gemini", top: "34.5%", left: "81%" },
  { label: "Llama", top: "39%", left: "81%" },
];

const teamLabels = [
  { label: "Product", top: "52%", left: "81%" },
  { label: "Ops", top: "56.5%", left: "81%" },
  { label: "Compliance", top: "61%", left: "81%" },
  { label: "Finanzen", top: "65.5%", left: "81%" },
];

export default function OpnyDashboardMock() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/mockups/opny-dashboard-base.png"
        alt="Opny Dashboard Mockup"
        width={1536}
        height={1024}
        priority
        sizes="(min-width: 1024px) 46vw, 90vw"
        className="h-auto w-full"
      />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute left-[39%] top-[12%] text-[10px] font-semibold text-[#0B0F1A]/70 md:text-xs">
          Alle Systeme betriebsbereit
        </span>

        {sidebarLabels.map((item) => (
          <span
            key={item.label}
            className="absolute text-[10px] font-medium text-[#0B0F1A]/70 md:text-xs"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}

        {tabLabels.map((item) => (
          <span
            key={item.label}
            className="absolute text-[10px] font-semibold text-[#0B0F1A]/80 md:text-xs"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}

        {rightPanelLabels.map((item) => (
          <span
            key={item.label}
            className="absolute text-[10px] font-semibold text-[#0B0F1A]/85 md:text-xs"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}

        {kpiLabels.map((item) => (
          <span
            key={item.label}
            className="absolute hidden text-[9px] font-medium text-[#0B0F1A]/70 md:block md:text-[10px]"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}

        {chartLabels.map((item) => (
          <span
            key={item.label}
            className="absolute hidden text-[9px] font-medium text-[#0B0F1A]/70 md:block md:text-[10px]"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}

        {modelLabels.map((item) => (
          <span
            key={item.label}
            className="absolute hidden text-[9px] font-medium text-[#0B0F1A]/70 md:block md:text-[10px]"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}

        {teamLabels.map((item) => (
          <span
            key={item.label}
            className="absolute hidden text-[9px] font-medium text-[#0B0F1A]/70 md:block md:text-[10px]"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
