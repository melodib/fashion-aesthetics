import React, { useState } from "react";
import { ATLAS_DATA } from "./atlasData.js";
import { SPECIES_ENTRIES } from "./speciesEntries.js";

const IVORY = "#FAF8F5";
const INK   = "#1C1C1C";
const ACCENT = "#B8896A";
const RULE  = "#E2D9CF";
const SOFT  = "#F0EBE3";

const PHYLUM_COLORS = {
  1: { bg: "#2C1810", accent: "#C4956A" },
  2: { bg: "#1A1A2E", accent: "#7B68EE" },
  3: { bg: "#0D2818", accent: "#4CAF7D" },
  4: { bg: "#2D1B2E", accent: "#C77DFF" },
  5: { bg: "#1A1A1A", accent: "#E07B54" },
  6: { bg: "#1A1510", accent: "#D4AF37" },
  7: { bg: "#1A1020", accent: "#E91E8C" },
  8: { bg: "#1C1A14", accent: "#C4A35A" },
  9: { bg: "#0F0F2A", accent: "#9C6ADE" },
  10: { bg: "#0F2419", accent: "#52B788" },
  11: { bg: "#001A33", accent: "#00B4D8" },
  12: { bg: "#001220", accent: "#00E5FF" },
};
function SpeciesCard({ speciesName, phylumNum, onClose }) {
  const entry = SPECIES_ENTRIES[speciesName];
  const colors = PHYLUM_COLORS[phylumNum] || { bg: "#1A1A1A", accent: "#B8896A" };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <div style={{ background: IVORY, width: "100%", maxWidth: "550px", maxHeight: "85vh", borderRadius: "20px", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
        
        {/* Header */}
        <div style={{ background: colors.bg, padding: "20px", color: "white" }}>
          <div style={{ fontSize: "0.7rem", color: colors.accent, textTransform: "uppercase", marginBottom: "5px" }}>Phylum {phylumNum}</div>
          <h2 style={{ fontFamily: "serif", margin: 0, fontStyle: "italic" }}>{speciesName}</h2>
          <button onClick={onClose} style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "white", fontSize: "1.5rem", cursor: "pointer" }}>×</button>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: "25px", overflowY: "auto", flex: 1 }}>
          
          {/* Categories/Tags (This is the simple way you asked for!) */}
          {entry?.categories && (
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
              {entry.categories.map(tag => (
                <span key={tag} style={{ background: SOFT, border: `1px solid ${RULE}`, padding: "4px 10px", borderRadius: "15px", fontSize: "0.75rem" }}>#{tag}</span>
              ))}
            </div>
          )}

          <p style={{ fontFamily: "serif", fontSize: "1.1rem", lineHeight: "1.7", color: INK, whiteSpace: "pre-wrap", margin: 0 }}>
            {entry?.summary || "Field notes pending..."}
          </p>

          {entry?.visual && (
            <div style={{ marginTop: "25px", padding: "15px", background: SOFT, borderRadius: "10px", borderLeft: `4px solid ${colors.accent}` }}>
              <div style={{ fontSize: "0.6rem", color: colors.accent, textTransform: "uppercase", marginBottom: "5px" }}>Visual Description</div>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>{entry.visual}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [activePhylum, setActivePhylum] = useState(null);

  return (
    <div style={{ background: IVORY, minHeight: "100vh", padding: "40px 20px" }}>
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontFamily: "serif", fontSize: "3rem", color: INK, margin: 0 }}>Atlas of Fashion Aesthetics</h1>
        <p style={{ color: ACCENT, letterSpacing: "2px" }}>KINGDOM • CULTURE • 2026</p>
      </header>

      {/* Grid of Phyla */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", maxWidth: "1000px", margin: "0 auto" }}>
        {ATLAS_DATA.phyla.map((p) => (
          <div key={p.number} style={{ background: "white", padding: "20px", borderRadius: "15px", border: `1px solid ${RULE}`, borderTop: `4px solid ${PHYLUM_COLORS[p.number]?.accent}` }}>
            <h3 style={{ margin: "0 0 10px 0" }}>{p.emoji} {p.name}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {p.classes.map(cls => (
                cls.species.map(s => {
                  const sName = Array.isArray(s) ? s[0] : s;
                  return (
                    <button 
                      key={sName}
                      onClick={() => {
                        setSelectedSpecies(sName);
                        setActivePhylum(p.number);
                      }}
                      style={{ background: SOFT, border: "none", padding: "5px 10px", borderRadius: "5px", fontSize: "0.8rem", cursor: "pointer" }}
                    >
                      {sName}
                    </button>
                  );
                })
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* The Pop-up Trigger */}
      {selectedSpecies && (
        <SpeciesCard 
          speciesName={selectedSpecies} 
          phylumNum={activePhylum} 
          onClose={() => setSelectedSpecies(null)} 
        />
      )}
    </div>
  );
}
