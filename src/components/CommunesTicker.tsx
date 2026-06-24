const communes = [
  "Annecy", "Annemasse", "Thonon-les-Bains", "Saint-Julien-en-Genevois",
  "Gex", "Ferney-Voltaire", "Cluses", "Bonneville", "Évian-les-Bains",
  "Sallanches", "Chamonix", "Saint-Gervais-les-Bains", "Megève",
  "Reignier-Ésery", "Archamps", "Cruseilles", "Douvaine", "Bellegarde-sur-Valserine",
  "Saint-Genis-Pouilly", "Prévessin-Moëns", "Thoiry", "Divonne-les-Bains",
  "Rumilly", "La Roche-sur-Foron", "Marnaz", "Seyssel", "Gaillard",
];

export function CommunesTicker() {
  const items = [...communes, ...communes];

  return (
    <div className="bg-[#2C2C2A] py-3 overflow-hidden border-b border-white/10">
      <div className="flex items-center gap-0">
        {/* Label fixe */}
        <div className="flex-shrink-0 bg-[#BA7517] px-4 py-1.5 mr-0 z-10">
          <span className="text-white text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">Zone d&apos;intervention</span>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden flex-1">
          <div className="flex whitespace-nowrap" style={{ animation: "ticker 35s linear infinite" }}>
            {items.map((commune, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-white/70 text-[13px] px-5">
                <span className="text-[#BA7517] text-[8px]">◆</span>
                {commune}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
