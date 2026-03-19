import { useState, useMemo, useCallback, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import { ATLAS_DATA } from "./atlasData.js";
import { NOTES } from "./notes.js";
import { SPECIES_ENTRIES } from "./speciesEntries.js";
import { someSearchFunction } from "./searchUtils.js"; // <--- Add this

// ── Design tokens ─────────────────────────────────────────────────────────────
const ACCENT = "#B8896A";
const INK    = "#1C1C1C";
const IVORY  = "#FAF8F5";
const MUTED  = "#888888";
const RED    = "#C0392B";
const SOFT   = "#F0EBE3";
const RULE   = "#E2D9CF";

const PHYLUM_COLORS = {
  1:  { bg: "#2C1810", accent: "#C4956A" },
  2:  { bg: "#1A1A2E", accent: "#7B68EE" },
  3:  { bg: "#0D2818", accent: "#4CAF7D" },
  4:  { bg: "#2D1B2E", accent: "#C77DFF" },
  5:  { bg: "#1A1A1A", accent: "#E07B54" },
  6:  { bg: "#1A1510", accent: "#D4AF37" },
  7:  { bg: "#1A1020", accent: "#E91E8C" },
  8:  { bg: "#1C1A14", accent: "#C4A35A" },
  9:  { bg: "#0F0F2A", accent: "#9C6ADE" },
  10: { bg: "#0F2419", accent: "#52B788" },
  11: { bg: "#001A33", accent: "#00B4D8" },
  12: { bg: "#001220", accent: "#00E5FF" },
};

// ── Global Styles ─────────────────────────────────────────────────────────────
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    background-color: #F7F3F0;
    color: #1A1A1A;
    overflow-x: hidden;
    font-family: 'EB Garamond', serif;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #F7F3F0; }
  ::-webkit-scrollbar-thumb { background: #D1C7BD; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: #B8896A; }

  .phylum-card {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    animation: slideUp 0.5s ease forwards;
  }

  .phylum-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(184, 137, 106, 0.15);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .species-modal {
    animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

// ── Helpers ──────────────────────────────────────────────────────────────────
const getNote  = (num, name) => (NOTES && NOTES[`${num}|${name}`]) || null;
const getEntry = (name) => (SPECIES_ENTRIES && SPECIES_ENTRIES[name]) || null;
const phylumOf = num => ATLAS_DATA?.phyla?.find(p => p.number === num);
const isSens = (flag) => flag?.includes("s") || false;
const isCross = (flag) => flag?.includes("x") || false;

// FIX ISSUE 3: Normalize species data structure
const normalizeSpecies = (s) => (Array.isArray(s) ? s : [s ?? "Unknown", ""]);

function hl(text, q) {
  if (!q || !text) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark style={{ background: "#B8896A33", borderRadius: 2, color: "inherit" }}>
        {text.slice(i, i + q.length)}
      </mark>
      {text.slice(i + q.length)}
    </>
  );
}

// ── Hooks ────────────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frameId;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(step);
      else setCount(target);
    };
    const timeoutId = setTimeout(() => { frameId = requestAnimationFrame(step); }, 300);
    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [target, duration]);
  return count;
}

// ── Components ───────────────────────────────────────────────────────────────

function SpeciesCard({ species, phylumNum, className, onClose }) {
  const [name, flag] = normalizeSpecies(species);
  const entry = getEntry(name);
  const colors = PHYLUM_COLORS[phylumNum] ?? { bg: "#1A1A1A", accent: "#B8896A" };
  const phylumName = phylumOf(phylumNum)?.name ?? "Unknown Phylum";
  const sensitive = isSens(flag);

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.62)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,padding:"1rem",backdropFilter:"blur(2px)"}}>
      <div className="species-modal" onClick={e=>e.stopPropagation()} style={{background:IVORY,borderRadius:"18px",width:"100%",maxWidth:"580px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 40px 120px rgba(0,0,0,0.45)"}}>
        <div style={{background:`linear-gradient(135deg, ${colors.bg} 0%, ${colors.bg}ee 100%)`,borderRadius:"18px 18px 0 0",padding:"1.4rem 1.5rem 1.1rem",position:"sticky",top:0,zIndex:10}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div style={{fontSize:"0.58rem",color:colors.accent,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:"0.35rem",opacity:0.85}}>
                {phylumName} &nbsp;›&nbsp; {className ?? "Unclassified"}
              </div>
              <h2 style={{fontSize:"1.55rem",color:"#fff",margin:0,lineHeight:1.2,fontStyle:"italic",fontWeight:400}}>
                {name} {sensitive && "⚠"}
              </h2>
            </div>
            <button onClick={onClose} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",width:34,height:34,cursor:"pointer",color:"#fff"}}>×</button>
          </div>
        </div>
        <div style={{padding:"1.4rem 1.5rem 1.6rem", display: "flex", flexDirection: "column", gap: "1.2rem"}}>
           {entry ? (
             <>
               {entry.summary && <p style={{fontSize:"1.15rem",color:INK,lineHeight:1.85,margin:0,fontStyle:"italic"}}>{entry.summary}</p>}
               {(entry.era || entry.mood) && (
                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
                   <div style={{background:SOFT,borderRadius:"10px",padding:"0.55rem 0.8rem", border:`1px solid ${RULE}`}}>
                     <div style={{fontSize:"0.56rem",color:MUTED,textTransform:"uppercase"}}>Era</div>
                     <div style={{fontSize:"0.85rem"}}>{entry.era || "N/A"}</div>
                   </div>
                   <div style={{background:SOFT,borderRadius:"10px",padding:"0.55rem 0.8rem", border:`1px solid ${RULE}`}}>
                     <div style={{fontSize:"0.56rem",color:MUTED,textTransform:"uppercase"}}>Mood</div>
                     <div style={{fontSize:"0.85rem",fontStyle:"italic"}}>{entry.mood || "N/A"}</div>
                   </div>
                 </div>
               )}
               {entry.visual && (
                 <div style={{background:SOFT,border:`1px solid ${RULE}`,borderLeft:`4px solid ${colors.accent}`,borderRadius:"10px",padding:"0.9rem 1rem"}}>
                   <div style={{fontSize:"0.58rem",color:colors.accent,textTransform:"uppercase",marginBottom:"0.4rem"}}>Visual Description</div>
                   <p style={{fontSize:"0.92rem",color:INK,margin:0,lineHeight:1.75}}>{entry.visual}</p>
                 </div>
               )}
               {entry.colors?.length > 0 && (
                 <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"10px",padding:"0.8rem 1rem"}}>
                   <div style={{fontSize:"0.58rem",color:MUTED,textTransform:"uppercase",marginBottom:"0.65rem"}}>Colour Palette</div>
                   <div style={{display:"flex",gap:"0.7rem",flexWrap:"wrap"}}>
                     {entry.colors.map((c, i) => (
                       <span key={i} style={{fontSize:"0.78rem", display: "flex", alignItems: "center", gap: "4px"}}>
                         <div style={{width: 12, height: 12, borderRadius: "50%", background: c.match(/#[0-9A-Fa-f]{6}/)?.[0] || MUTED}}/> {c}
                       </span>
                     ))}
                   </div>
                 </div>
               )}
             </>
           ) : <p style={{color:MUTED, fontStyle:"italic"}}>Full field guide entry pending.</p>}
        </div>
      </div>
    </div>
  );
}

function PhylumView({ phylum, onSpeciesClick }) {
  const [expandedGroup, setExpandedGroup] = useState(null); 
  const colors = PHYLUM_COLORS[phylum.number];
  const groups = phylum.classes || phylum.families || [];

  return (
    <div>
      {groups.map((group, idx) => {
        const speciesList = group.subfamilies ? group.subfamilies.flatMap(sub => sub.species || []) : (group.species || []);
        if (speciesList.length === 0) return null;
        const isExpanded = expandedGroup === idx;
        return (
          <div key={group.name} style={{ marginBottom: "0.8rem" }}>
            <div onClick={() => setExpandedGroup(isExpanded ? null : idx)} style={{ background: INK, color: "white", padding: "1rem", borderRadius: "8px", borderLeft: `4px solid ${colors.accent}`, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "0.9rem" }}>{group.name}</span>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>{speciesList.length} species {isExpanded ? "▲" : "▼"}</span>
            </div>
            {isExpanded && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.8rem", padding: "1rem", background: SOFT, borderRadius: "0 0 8px 8px", border: `1px solid ${RULE}`, borderTop: "none" }}>
                {speciesList.map((item) => {
                   const [name, flag] = normalizeSpecies(item);
                   return (
                     // FIX ISSUE 1: Stable key based on name
                     <button key={name} onClick={() => onSpeciesClick(item, phylum.number, group.name)} style={{ padding: "0.4rem 0.8rem", borderRadius: "20px", border: `1px solid ${RULE}`, background: IVORY, fontSize: "0.85rem", cursor: "pointer", fontStyle: "italic" }}>
                       {name} {isSens(flag) && "⚠"} {isCross(flag) && "◆"}
                     </button>
                   );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SearchView({ results, query, onSpeciesClick }) {
  if (!query || query.length < 2) return (
    <div style={{textAlign:"center",padding:"5rem 2rem",color:MUTED}}>
      <div style={{fontSize:"2.5rem",marginBottom:"1rem",opacity:0.4}}>◉</div>
      <div style={{fontFamily:"'EB Garamond',serif",fontStyle:"italic",fontSize:"1.1rem"}}>
        Search all {ATLAS_DATA.total.toLocaleString()} species, field notes, and entries…
      </div>
    </div>
  );

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"0.4rem"}}>
      <div style={{marginBottom:"1rem", color: MUTED, fontSize: "0.9rem"}}>Found {results.length} results</div>
      {results.map((res, i) => {
        const [name] = normalizeSpecies(res.species);
        const colors = PHYLUM_COLORS[res.phylumNum] || { bg: SOFT, accent: MUTED };
        return (
          <button key={`${res.phylumNum}-${name}`} onClick={() => onSpeciesClick(res.species, res.phylumNum, res.className)} style={{padding:"0.8rem", textAlign:"left", background: IVORY, border: `1px solid ${RULE}`, borderRadius: "10px", display:"flex", alignItems:"center", gap: "1rem", cursor: "pointer"}}>
             <span style={{background: colors.bg, color: colors.accent, padding:"2px 8px", borderRadius:"10px", fontSize: "0.65rem", whiteSpace: "nowrap"}}>{res.phylumEmoji} P{res.phylumNum}</span>
             <span style={{fontStyle: "italic", flex: 1}}>{hl(name, query)}</span>
             <span style={{fontSize: "0.7rem", color: MUTED}}>{res.className}</span>
          </button>
        );
      })}
    </div>
  );
}

function StatsView() {
  const stats = useMemo(() => {
    let sensitive = 0, crossover = 0, withEntries = 0, totalGroups = 0;
    ATLAS_DATA.phyla.forEach(p => {
      const groups = p.classes || p.families || [];
      totalGroups += groups.length;
      groups.forEach(g => {
        const list = g.subfamilies ? g.subfamilies.flatMap(s => s.species || []) : (g.species || []);
        list.forEach(s => {
          const [name, flag] = normalizeSpecies(s);
          if (isSens(flag)) sensitive++;
          if (isCross(flag)) crossover++;
          if (getEntry(name)) withEntries++;
        });
      });
    });
    return { sensitive, crossover, withEntries, totalGroups };
  }, []);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "0.85rem", marginBottom: "2.5rem" }}>
        {[
          [ATLAS_DATA.total.toLocaleString(), "Total Species", ACCENT],
          [12, "Phyla", "#7B68EE"],
          [stats.totalGroups, "Classes/Families", "#52B788"],
          [stats.sensitive, "Sensitive", RED],
          [stats.crossover, "Crossover", "#6060C0"],
          [stats.withEntries, "Full Entries", "#C4A35A"]
        ].map(([v, l, c]) => (
          <div key={l} style={{ background: IVORY, border: `1px solid ${RULE}`, borderTop: `3px solid ${c}`, borderRadius: "10px", padding: "1.1rem" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 500, color: c }}>{v}</div>
            <div style={{ fontSize: "0.68rem", color: MUTED, textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
      <h3 style={{ borderBottom: `1px solid ${RULE}`, paddingBottom: "0.5rem" }}>Distribution by Phylum</h3>
      {ATLAS_DATA.phyla.map(p => {
        const pct = (p.count / ATLAS_DATA.total * 100).toFixed(1);
        return (
          <div key={p.number} style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "4px" }}>
              <span>{p.emoji} {p.name}</span>
              <span>{p.count} ({pct}%)</span>
            </div>
            <div style={{ height: 6, background: SOFT, borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", background: PHYLUM_COLORS[p.number].accent, width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main App Component ───────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("home");
  const [activePhylum, setActivePhylum] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedPhylumNum, setSelectedPhylumNum] = useState(null);
  const [selectedClassName, setSelectedClassName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const animatedCount = useCountUp(ATLAS_DATA.total, 1800);
  const currentPhylum = activePhylum !== null ? ATLAS_DATA.phyla.find(p => p.number === activePhylum) : null;

  const handleSpeciesClick = useCallback((species, phylumNum, className) => {
    setSelectedSpecies(species);
    setSelectedPhylumNum(phylumNum);
    setSelectedClassName(className);
  }, []);

  const handleSearch = (val) => {
    setSearchQuery(val);
    if (val.length > 1) {
      const found = [];
      ATLAS_DATA.phyla.forEach(p => {
        const groups = p.classes || p.families || [];
        groups.forEach(g => {
          const list = g.subfamilies ? g.subfamilies.flatMap(s => s.species || []) : (g.species || []);
          list.forEach(s => {
            const [name] = normalizeSpecies(s);
            // FIX ISSUE 2: Safe defensive check for string inclusion
            if (name && typeof name === "string" && name.toLowerCase().includes(val.toLowerCase())) {
              found.push({ species: s, phylumNum: p.number, phylumEmoji: p.emoji, className: g.name });
            }
          });
        });
      });
      setSearchResults(found);
      setView("search");
    } else {
      setView(activePhylum ? "phylum" : "home");
    }
  };

  const goHome = () => { setView("home"); setActivePhylum(null); setSearchQuery(""); };

  return (
    <>
      <GlobalStyles />
      <div style={{ background: IVORY, minHeight: "100vh" }}>
        
        <nav style={{ background: INK, padding: "0.8rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, zIndex: 100 }}>
          <button onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", color: IVORY, fontSize: "1.1rem" }}>
            Atlas of <span style={{ color: ACCENT, fontStyle: "italic" }}>Aesthetics</span>
          </button>
          <input 
            placeholder={`Search ${ATLAS_DATA.total.toLocaleString()} species…`}
            value={searchQuery} 
            onChange={e => handleSearch(e.target.value)} 
            style={{ flex: 1, padding: "0.5rem 1rem", borderRadius: "20px", border: "none", background: "#222", color: "#fff" }} 
          />
          <button onClick={() => setView("stats")} style={{ background: "none", border: "none", cursor: "pointer" }}>📊</button>
        </nav>

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
          {view === "home" && (
            <>
              <div style={{ textAlign: "center", padding: "4rem 0", borderBottom: `1px solid ${RULE}`, marginBottom: "3rem" }}>
                <div style={{ fontSize: "0.72rem", color: ACCENT, letterSpacing: "0.28em", textTransform: "uppercase" }}>Kingdom · Fashion Aesthetic Culture</div>
                <h1 style={{ fontSize: "3rem", margin: "0.5rem 0" }}>Atlas of <em>Fashion Aesthetics</em></h1>
                <p style={{ color: MUTED, fontStyle: "italic" }}>{animatedCount.toLocaleString()} Species · 12 Phyla · 2026 Edition</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.2rem" }}>
                {ATLAS_DATA.phyla.map((p, idx) => {
                  const pct = ((p.count / ATLAS_DATA.total) * 100).toFixed(1);
                  return (
                    <button key={p.number} className="phylum-card" onClick={() => { setActivePhylum(p.number); setView("phylum"); }}
                      style={{ background: IVORY, border: `1px solid ${RULE}`, borderTop: `4px solid ${PHYLUM_COLORS[p.number].accent}`, borderRadius: "12px", padding: "1.5rem", textAlign: "left", cursor: "pointer", animationDelay: `${idx * 0.05}s` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{p.emoji}</div>
                        <span style={{ fontSize: "0.75rem", color: MUTED }}>
                          {p.count} species ({pct}%)
                        </span>
                      </div>
                      <div style={{ fontSize: "0.58rem", color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>Phylum {p.number}</div>
                      <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>{p.name}</div>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {view === "phylum" && currentPhylum && (
            <div>
              <button onClick={goHome} style={{ color: ACCENT, background: "none", border: "none", cursor: "pointer", marginBottom: "1rem" }}>← Back to Phyla</button>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>{currentPhylum.emoji} {currentPhylum.name}</h2>
              <PhylumView phylum={currentPhylum} onSpeciesClick={handleSpeciesClick} />
            </div>
          )}

          {view === "search" && <SearchView results={searchResults} query={searchQuery} onSpeciesClick={handleSpeciesClick} />}
          {view === "stats" && <StatsView />}
        </div>

        {selectedSpecies && (
          <SpeciesCard species={selectedSpecies} phylumNum={selectedPhylumNum} className={selectedClassName} onClose={() => setSelectedSpecies(null)} />
        )}
      </div>
    </>
  );
}
