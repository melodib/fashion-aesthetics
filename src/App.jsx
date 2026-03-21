import { useState, useMemo, useCallback, useEffect } from "react";
import { ATLAS_DATA } from "./atlasData.js";
import { NOTES } from "./notes.js";
import { SPECIES_ENTRIES } from "./speciesEntries.js";
import { queryAtlas } from "./searchUtils.js";

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

  /* 🧪 NEW: THE INCUBATOR GLITCH ANIMATION */
  @keyframes glitch-flicker {
    0% { opacity: 1; transform: translate(0); }
    10% { opacity: 0.8; transform: translate(-1px, 1px); text-shadow: 1px 0 #00ffff, -1px 0 #ff00ff; }
    20% { opacity: 1; transform: translate(0); }
    100% { opacity: 1; transform: translate(0); }
  }

  .incubator-glitch:hover {
    animation: glitch-flicker 0.3s infinite;
    border-color: #00ffff !important;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
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
  const crossover = isCross(flag);
  const metadata = entry?.metadata;
  const NOTE_PAPER = "#FDFCF0"; 

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.62)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,padding:"1rem",backdropFilter:"blur(4px)"}}>
      <div className="species-modal" onClick={e=>e.stopPropagation()} style={{background:IVORY,borderRadius:"18px",width:"100%",maxWidth:"580px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 40px 120px rgba(0,0,0,0.45)"}}>
        
        {/* Header Section */}
        <div style={{background:`linear-gradient(135deg, ${colors.bg} 0%, ${colors.bg}ee 100%)`,borderRadius:"18px 18px 0 0",padding:"1.4rem 1.5rem 1.1rem",position:"sticky",top:0,zIndex:10}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div style={{fontSize:"0.58rem",color:colors.accent,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:"0.35rem",opacity:0.85}}>
                {phylumName} &nbsp;›&nbsp; {className ?? "Unclassified"}
              </div>
              <h2 style={{fontSize:"1.6rem",color:"#fff",margin:0,lineHeight:1.2,fontStyle:"italic",fontWeight:400}}>
                {name} {sensitive && "⚠"}
              </h2>
              {crossover && (
                <span style={{fontSize:"0.6rem", background: "rgba(255,255,255,0.15)", color: "#fff", padding: "2px 6px", borderRadius: "4px", marginTop: "8px", display: "inline-block", textTransform: "uppercase", letterSpacing: "0.1em"}}>
                  ◈ Crossover Species
                </span>
              )}
            </div>
            <button onClick={onClose} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",width:34,height:34,cursor:"pointer",color:"#fff", fontSize: "1.2rem"}}>×</button>
          </div>
        </div>

        /* Content Section */
<div style={{padding:"1.4rem 1.5rem 1.6rem", display: "flex", flexDirection: "column", gap: "1.2rem"}}>
  
  {/* --- THE REALITY MOTTO (CORE LOGIC) --- */}
{metadata && metadata.realityState && (
  <div style={{ 
    fontSize: "0.72rem", 
    color: colors.accent, 
    borderLeft: `2px solid ${colors.accent}`, 
    padding: "2px 0 2px 12px", 
    marginBottom: "1.2rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: "600",
    fontStyle: "italic"
  }}>
    CORE LOGIC: {axisDefinitions.coreLogic[metadata.realityState] || "Reality Unindexed"}
  </div>
)}
  {/* --- NEW: THE TAXONOMIC MATRIX BAR --- */}
{metadata && (
  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
    
    {/* 1. Metabolic Axis - Red */}
    {metadata.metabolic && (
      <div style={{ fontSize: "0.55rem", padding: "2px 8px", borderRadius: "12px", border: "1px solid #FF5F5F", color: "#FF5F5F", fontWeight: "bold", textTransform: "uppercase" }}>
        ◈ {metadata.metabolic}
      </div>
    )}
    
    {/* 2. Durational Axis - Green */}
    {metadata.durational && (
      <div style={{ fontSize: "0.55rem", padding: "2px 8px", borderRadius: "12px", border: "1px solid #5FFF8B", color: "#5FFF8B", fontWeight: "bold", textTransform: "uppercase" }}>
        ⏳ {metadata.durational}
      </div>
    )}

    {/* 3. Visibility Axis - Blue */}
    {metadata.visibility && (
      <div style={{ fontSize: "0.55rem", padding: "2px 8px", borderRadius: "12px", border: "1px solid #5F9DFF", color: "#5F9DFF", fontWeight: "bold", textTransform: "uppercase" }}>
        👁 {metadata.visibility}
      </div>
    )}

    {/* 4. Maintenance Axis - Gold */}
    {metadata.maintenance && (
      <div style={{ fontSize: "0.55rem", padding: "2px 8px", borderRadius: "12px", border: "1px solid #D4AF37", color: "#D4AF37", fontWeight: "bold", textTransform: "uppercase" }}>
        ⚒ {metadata.maintenance}
      </div>
    )}

    {/* 5. Interaction Axis - Purple */}
    {metadata.interaction && (
      <div style={{ fontSize: "0.55rem", padding: "2px 8px", borderRadius: "12px", border: "1px solid #9C6ADE", color: "#9C6ADE", fontWeight: "bold", textTransform: "uppercase" }}>
        📡 {metadata.interaction}
      </div>
    )}

    {/* 6. Sovereignty Axis - Silver/Grey */}
    {metadata.sovereignty && (
      <div style={{ fontSize: "0.55rem", padding: "2px 8px", borderRadius: "12px", border: "1px solid #888", color: "#888", fontWeight: "bold", textTransform: "uppercase" }}>
        ⚖ {metadata.sovereignty}
      </div>
    )}
  </div>
)}
  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", color: MUTED, borderBottom: `1px solid ${RULE}`, paddingBottom: "6px", letterSpacing: "0.1em" }}>
    <span>CATALOGUE NO. {phylumNum}.{name.substring(0,3).toUpperCase()}</span>
    
    {/* REPLACE THE OLD STATUS LINE WITH THIS ONE: */}
    <span>
      STATUS: {className?.includes("INCUBATOR") 
        ? "UNDER OBSERVATION" 
        : (sensitive ? "RESTRICTED" : "OPEN ACCESS")}
    </span>
  </div>

  {/* Rest of your entry logic continues here... */}
  {entry ? (
             <>
               {entry.summary && <p style={{fontSize:"1.15rem",color:INK,lineHeight:1.85,margin:0,fontStyle:"italic"}}>{entry.summary}</p>}
               
               {(entry.era || entry.mood) && (
                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
                   <div style={{background:SOFT,borderRadius:"10px",padding:"0.55rem 0.8rem", border:`1px solid ${RULE}`}}>
                     <div style={{fontSize:"0.56rem",color:MUTED,textTransform:"uppercase", letterSpacing: "0.05em"}}>Chronological Era</div>
                     <div style={{fontSize:"0.85rem"}}>{entry.era || "Undefined"}</div>
                   </div>
                   <div style={{background:SOFT,borderRadius:"10px",padding:"0.55rem 0.8rem", border:`1px solid ${RULE}`}}>
                     <div style={{fontSize:"0.56rem",color:MUTED,textTransform:"uppercase", letterSpacing: "0.05em"}}>Atmospheric Mood</div>
                     <div style={{fontSize:"0.85rem",fontStyle:"italic"}}>{entry.mood || "Undefined"}</div>
                   </div>
                 </div>
               )}

               {/* 🖋️ The "Field Note" Visual Description */}
               {entry.visual && (
                 <div style={{
                   background: NOTE_PAPER,
                   border: `1px solid #D1C7BD`,
                   borderRadius: "4px",
                   padding: "1.2rem",
                   position: "relative",
                   boxShadow: "2px 2px 0px rgba(0,0,0,0.05)",
                   overflow: "hidden"
                 }}>
                   <div style={{
                     position: "absolute", inset: 0,
                     backgroundImage: `linear-gradient(${RULE} 1px, transparent 1px)`,
                     backgroundSize: "100% 1.8rem",
                     opacity: 0.3,
                     pointerEvents: "none"
                   }} />
                   
                   <div style={{ fontSize: "0.6rem", color: colors.accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.8rem", position: "relative", fontWeight: "bold" }}>
                     Field Observations / Visual Characteristics
                   </div>
                   
                   <p style={{ fontSize: "0.95rem", color: "#2C3E50", margin: 0, lineHeight: "1.8rem", position: "relative", fontStyle: "italic" }}>
                     {entry.visual}
                   </p>
                 </div>
               )}

               {entry.colors?.length > 0 && (
                 <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"10px",padding:"0.8rem 1rem"}}>
                   <div style={{fontSize:"0.58rem",color:MUTED,textTransform:"uppercase",marginBottom:"0.65rem", letterSpacing: "0.05em"}}>Specimen Colour Palette</div>
                   <div style={{display:"flex",gap:"0.7rem",flexWrap:"wrap"}}>
                     {entry.colors.map((c, i) => (
                       <span key={i} style={{fontSize:"0.78rem", display: "flex", alignItems: "center", gap: "6px"}}>
                         <div style={{width: 14, height: 14, borderRadius: "50%", background: c.match(/#[0-9A-Fa-f]{6}/)?.[0] || MUTED, border: "1px solid rgba(0,0,0,0.1)"}}/> {c}
                       </span>
                     ))}
                   </div>
                 </div>
               )}
             </>
           ) : (
             <div style={{textAlign: "center", padding: "2rem 0", color: MUTED}}>
               <div style={{fontSize: "2rem", marginBottom: "0.5rem"}}>📋</div>
               <p style={{fontStyle:"italic", margin: 0}}>Full field guide entry for this specimen is currently being compiled.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}

function PhylumView({ phylum, onSpeciesClick }) {
  const [openStates, setOpenStates] = useState({}); 
  const colors = PHYLUM_COLORS[phylum.number];
  const groups = phylum.classes || phylum.families || [];

  const toggleGroup = (idx) => {
    setOpenStates(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      {groups.map((group, idx) => {
        const hasSubfamilies = !!group.subfamilies;
        const speciesList = hasSubfamilies 
          ? group.subfamilies.flatMap(sub => sub.species || []) 
          : (group.species || []);
        
        if (speciesList.length === 0) return null;
        const isExpanded = !!openStates[idx];

        // --- ADDED LOGIC HERE ---
        const isExperimental = group.isExperimental || group.name.includes("INCUBATOR");

        return (
          <div key={group.name} style={{ marginBottom: "1rem" }}>
            {/* Class/Family Header */}
            <div 
              onClick={() => toggleGroup(idx)} 
              className={isExperimental ? "incubator-glitch" : ""}
              style={{ 
                // --- MODIFIED BACKGROUND & BORDERS ---
                background: isExperimental ? "linear-gradient(90deg, #1A1A1A, #001220)" : INK, 
                color: "white", 
                padding: "0.9rem 1.2rem", 
                borderRadius: isExpanded ? "10px 10px 0 0" : "10px", 
                borderLeft: `5px solid ${isExperimental ? ACCENT : colors.accent}`, 
                border: isExperimental ? `1px dashed ${ACCENT}44` : "none", // Subtle dashed border
                cursor: "pointer", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                boxShadow: isExpanded ? "none" : "0 2px 8px rgba(0,0,0,0.1)"
              }}
            >
              <span style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.08em" }}>
                {/* --- ADDED WARNING EMOJI --- */}
                {isExperimental && "⚠️ "}{group.name}
              </span>
              <span style={{ fontSize: "0.75rem", color: isExperimental ? ACCENT : "#888", fontStyle: "italic" }}>
                {/* --- DYNAMIC LABEL --- */}
                {isExperimental ? "PROVISIONAL DATA" : `${speciesList.length} species`} {isExpanded ? "▲" : "▼"}
              </span>
            </div>

            {/* ... Rest of the component (Expanded Content) stays exactly the same ... */}

            {/* Expanded Content */}
            {isExpanded && (
              <div style={{ 
                padding: "1.5rem", background: SOFT, borderRadius: "0 0 10px 10px", 
                border: `1px solid ${RULE}`, borderTop: "none",
                display: "flex", flexDirection: "column", gap: "1.5rem"
              }}>
                {hasSubfamilies ? (
                  group.subfamilies.map(sub => (
                    <div key={sub.name}>
                       {/* Sub-Family Label */}
                       <div style={{ 
                         fontSize: "0.65rem", color: colors.accent, fontWeight: "bold",
                         textTransform: "uppercase", letterSpacing: "0.15em",
                         marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "8px"
                       }}>
                         <div style={{ height: "1px", flex: 1, background: RULE }} />
                         {sub.name}
                         <div style={{ height: "1px", flex: 1, background: RULE }} />
                       </div>
                       
                       <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                         {sub.species.map(item => {
                           const [name, flag] = normalizeSpecies(item);
                           return (
                             <button 
                               key={name} 
                               onClick={() => onSpeciesClick(item, phylum.number, group.name)} 
                               style={{ padding: "0.5rem 1rem", borderRadius: "20px", border: `1px solid ${RULE}`, background: IVORY, fontSize: "0.85rem", cursor: "pointer", fontStyle: "italic", transition: "all 0.2s" }}
                               onMouseOver={e => e.currentTarget.style.borderColor = colors.accent}
                               onMouseOut={e => e.currentTarget.style.borderColor = RULE}
                             >
                               {name} {isSens(flag) && "⚠"}
                             </button>
                           );
                         })}
                       </div>
                    </div>
                  ))
                ) : (
                  /* Standard Class View */
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                    {speciesList.map((item) => {
                      const [name, flag] = normalizeSpecies(item);
                      return (
                        <button key={name} onClick={() => onSpeciesClick(item, phylum.number, group.name)} style={{ padding: "0.5rem 1rem", borderRadius: "20px", border: `1px solid ${RULE}`, background: IVORY, fontSize: "0.85rem", cursor: "pointer", fontStyle: "italic" }}>
                          {name} {isSens(flag) && "⚠"}
                        </button>
                      );
                    })}
                  </div>
                )}
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
  const [searchResults, setSearchResults] = useState([]);
  
  // Modal State
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedPhylumNum, setSelectedPhylumNum] = useState(null);
  const [selectedClassName, setSelectedClassName] = useState("");

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
      const found = queryAtlas(val, ATLAS_DATA); 
      setSearchResults(found);
      setView("search");
    } else {
      setView(activePhylum ? "phylum" : "home");
    }
  };

  const goHome = () => { 
    setView("home"); 
    setActivePhylum(null); 
    setSearchQuery(""); 
  };

  return (
    <>
      <GlobalStyles />
      <div style={{ background: IVORY, minHeight: "100vh" }}>
        
        {/* ── TOP NAV BAR (Always stays here) ── */}
        <nav style={{ background: INK, padding: "0.8rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, zIndex: 100 }}>
          <button onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", color: IVORY, fontSize: "1.1rem", fontFamily: "'EB Garamond', serif" }}>
            Atlas of <span style={{ color: ACCENT, fontStyle: "italic" }}>Aesthetics</span>
          </button>
          <input 
            placeholder={`Search ${ATLAS_DATA.total.toLocaleString()} species…`}
            value={searchQuery} 
            onChange={e => handleSearch(e.target.value)} 
            style={{ flex: 1, padding: "0.5rem 1.2rem", borderRadius: "20px", border: "none", background: "#2A2A2A", color: "#fff", fontSize: "0.9rem" }} 
          />
          <button onClick={() => setView("stats")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }}>📊</button>
        </nav>

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
          
          {/* VIEW 1: SEARCH RESULTS */}
          {view === "search" && (
            <SearchView results={searchResults} query={searchQuery} onSpeciesClick={handleSpeciesClick} />
          )}

          {/* VIEW 2: STATISTICS */}
          {view === "stats" && (
            <>
              <button onClick={goHome} style={{ color: ACCENT, background: "none", border: "none", cursor: "pointer", marginBottom: "1.5rem" }}>← Back to Atlas</button>
              <StatsView />
            </>
          )}

          {/* VIEW 3: HOME GRID */}
          {view === "home" && (
            <>
              <div style={{ textAlign: "center", padding: "4rem 0", borderBottom: `1px solid ${RULE}`, marginBottom: "3rem" }}>
                <div style={{ fontSize: "0.72rem", color: ACCENT, letterSpacing: "0.28em", textTransform: "uppercase" }}>Kingdom · Fashion Aesthetic Culture</div>
                <h1 style={{ fontSize: "3.5rem", margin: "0.5rem 0", fontWeight: 400 }}>Atlas of <em>Fashion Aesthetics</em></h1>
                <p style={{ color: MUTED, fontStyle: "italic", fontSize: "1.1rem" }}>{animatedCount.toLocaleString()} Species · 12 Phyla · 2026 Edition</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
                {ATLAS_DATA.phyla.map((p, idx) => {
                  const pct = ((p.count / ATLAS_DATA.total) * 100).toFixed(1);
                  return (
                    <button key={p.number} className="phylum-card" 
                      onClick={() => { setActivePhylum(p.number); setView("phylum"); }}
                      style={{ background: IVORY, border: `1px solid ${RULE}`, borderTop: `4px solid ${PHYLUM_COLORS[p.number].accent}`, borderRadius: "12px", padding: "1.8rem", textAlign: "left", cursor: "pointer", animationDelay: `${idx * 0.05}s` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{p.emoji}</div>
                        <span style={{ fontSize: "0.7rem", color: MUTED }}>{p.count} items</span>
                      </div>
                      <div style={{ fontSize: "0.6rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Phylum {p.number}</div>
                      <div style={{ fontWeight: 600, fontSize: "1.2rem", color: INK }}>{p.name}</div>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* VIEW 4: PHYLUM DETAIL */}
          {view === "phylum" && currentPhylum && (
            <div>
              <div style={{ display: "flex", gap: "0.6rem", overflowX: "auto", padding: "0.5rem 0 1.2rem", marginBottom: "1.5rem", borderBottom: `1px solid ${RULE}`, scrollbarWidth: "none" }}>
                {ATLAS_DATA.phyla.map(p => (
                  <button key={p.number} onClick={() => setActivePhylum(p.number)}
                    style={{ padding: "0.5rem 1rem", borderRadius: "25px", border: activePhylum === p.number ? "none" : `1px solid ${RULE}`, background: activePhylum === p.number ? INK : IVORY, color: activePhylum === p.number ? IVORY : INK, cursor: "pointer", whiteSpace: "nowrap", fontSize: "0.8rem" }}>
                    {p.emoji} P{p.number}
                  </button>
                ))}
              </div>
              <button onClick={goHome} style={{ color: ACCENT, background: "none", border: "none", cursor: "pointer", marginBottom: "1rem", fontSize: "0.9rem" }}>← Back to Main Atlas</button>
              <h2 style={{ fontSize: "2.8rem", marginBottom: "2rem", fontWeight: 400 }}>{currentPhylum.emoji} {currentPhylum.name}</h2>
              <PhylumView phylum={currentPhylum} onSpeciesClick={handleSpeciesClick} />
            </div>
          )}

          {/* ── GLOBAL MODAL (Pop-up) ── */}
          {selectedSpecies && (
            <SpeciesCard 
              species={selectedSpecies} 
              phylumNum={selectedPhylumNum} 
              className={selectedClassName} 
              onClose={() => setSelectedSpecies(null)} 
            />
          )}

        </div>
      </div>
    </>
  );
}