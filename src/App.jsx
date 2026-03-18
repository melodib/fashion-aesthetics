import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { ATLAS_DATA, futuristTechnologicalPhylum } from "./atlasData.js";
import { NOTES } from "./notes.js";
import { SPECIES_ENTRIES } from "./speciesEntries.js";
import { queryAtlas } from './searchUtils';

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

const RARITY_COLOR = {
  "Common":   "#52B788",
  "Niche":    "#B8896A",
  "Rare":     "#9C6ADE",
  "Extinct":  "#888888",
  "Emerging": "#E91E8C",
};

// ── Helpers (With Crash Prevention) ───────────────────────────────────────────
const getNote  = (num, name) => (NOTES && NOTES[`${num}|${name}`]) || null;
const getEntry = (name) => (SPECIES_ENTRIES && SPECIES_ENTRIES[name]) || null;
const phylumOf = num => ATLAS_DATA?.phyla?.find(p => p.number === num);

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
const isSens = (flag) => flag?.includes("s") || false;
const isCross = (flag) => flag?.includes("x") || false;
// ── Animated count-up hook (Fixed Memory Leaks) ───────────────────────────────
function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    let timeoutId;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(step);
    }, 300);

    // CLEANUP: This prevents the "GitHub/React crash" on unmount
    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [target, duration]);

  return count;
}
// ── Global styles definition ──────────────────────────────────────────────────
// This is the "blueprint" of how the site should look.
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  body {
    margin: 0;
    background: ${IVORY};
    /* Subtle paper/grain texture */
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  }

  .phylum-card {
    transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.2s ease, border-color 0.2s ease;
  }
  .phylum-card:hover {
    transform: translateY(-3px) scale(1.015);
    box-shadow: 0 12px 36px rgba(0,0,0,0.15);
  }

  .species-pill {
    transition: background 0.12s ease, color 0.12s ease, border-color 0.12s ease, transform 0.12s ease;
  }
  .species-pill:hover {
    transform: translateY(-1px);
  }

  .search-input:focus {
    border-color: ${ACCENT} !important;
    box-shadow: 0 0 0 2px rgba(184,137,106,0.2);
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .phylum-card { animation: cardIn 0.4s ease both; }

  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.97) translateY(8px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  .species-modal { animation: modalIn 0.22s ease both; }
`;

// ── Global styles component ───────────────────────────────────────────────────
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* 1. Typography: Loading the Scholar's Font */
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F7F3F0; /* IVORY */
    color: #1A1A1A; /* INK */
    overflow-x: hidden;
  }

  /* 2. Custom Scrollbar: Thin and Elegant */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #F7F3F0;
  }
  ::-webkit-scrollbar-thumb {
    background: #D1C7BD;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #B8896A; /* ACCENT */
  }

  /* 3. Interactive Animations */
  .phylum-card {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translateY(0);
    opacity: 0;
    animation: slideUp 0.5s ease forwards;
  }

  .phylum-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(184, 137, 106, 0.15);
  }

  .species-pill {
    transition: all 0.2s ease;
  }

  .search-input:focus {
    border-color: #B8896A !important;
    box-shadow: 0 0 0 3px rgba(184, 137, 106, 0.2);
  }

  /* 4. Keyframes for the 'Entrance' feel */
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 5. Modal Backdrop Blur */
  .species-modal {
    animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

export default GlobalStyles;

// ── SpeciesCard ───────────────────────────────────────────────────────────────
function SpeciesCard({ species, phylumNum, className, onClose, onSpeciesClick }) {
  const [name, flag] = Array.isArray(species) ? species : [species ?? "Unknown", ""];
  const entry = SPECIES_ENTRIES?.[name];
  const colors = PHYLUM_COLORS[phylumNum] ?? { bg: "#1A1A1A", accent: "#B8896A" };
  const phylumName = phylumOf(phylumNum)?.name ?? "Unknown Phylum";
  
  const sensitive = isSens(flag);

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.62)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,padding:"1rem",backdropFilter:"blur(2px)"}}>
      <div className="species-modal" onClick={e=>e.stopPropagation()} style={{background:IVORY,borderRadius:"18px",width:"100%",maxWidth:"580px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 40px 120px rgba(0,0,0,0.45)"}}>

        {/* Header */}
        <div style={{background:`linear-gradient(135deg, ${colors.bg} 0%, ${colors.bg}ee 100%)`,borderRadius:"18px 18px 0 0",padding:"1.4rem 1.5rem 1.1rem",position:"sticky",top:0,zIndex:10}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg, ${colors.accent}44, ${colors.accent}, ${colors.accent}44)`,borderRadius:"18px 18px 0 0"}}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div style={{fontSize:"0.58rem",color:colors.accent,letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"'EB Garamond',serif",marginBottom:"0.35rem",opacity:0.85}}>
                {phylumName} &nbsp;›&nbsp; {className ?? "Unclassified"}
              </div>
              <h2 style={{fontFamily:"'EB Garamond',serif",fontSize:"1.55rem",color:"#fff",margin:0,lineHeight:1.2,fontStyle:"italic",fontWeight:400}}>
                {name} {sensitive && "⚠"}
              </h2>
            </div>
            <button onClick={onClose} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",width:34,height:34,cursor:"pointer",color:"#fff",fontSize:"1rem"}}>×</button>
          </div>
        </div>

        {/* Body Content */}
        <div style={{padding:"1.4rem 1.5rem 1.6rem",display:"flex",flexDirection:"column",gap:"1.2rem"}}>
          {entry ? (
            <>
              {/* 1. Summary */}
              <p style={{fontFamily:"'EB Garamond',serif",fontSize:"1.15rem",color:INK,lineHeight:1.85,margin:0,fontStyle:"italic"}}>
                {entry.summary}
              </p>

              {/* 2. Era & Mood */}
              {(entry.era || entry.mood) && (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
                  {entry.era && (
                    <div style={{background:SOFT,borderRadius:"10px",padding:"0.55rem 0.8rem", border:`1px solid ${RULE}`}}>
                      <div style={{fontSize:"0.56rem",color:MUTED,textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.2rem"}}>Era</div>
                      <div style={{fontFamily:"'EB Garamond',serif",fontSize:"0.85rem"}}>{entry.era}</div>
                    </div>
                  )}
                  {entry.mood && (
                    <div style={{background:SOFT,borderRadius:"10px",padding:"0.55rem 0.8rem", border:`1px solid ${RULE}`}}>
                      <div style={{fontSize:"0.56rem",color:MUTED,textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.2rem"}}>Mood</div>
                      <div style={{fontFamily:"'EB Garamond',serif",fontSize:"0.85rem",fontStyle:"italic"}}>{entry.mood}</div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Technical Motif Note */}
              {entry.motif && (
                <div style={{ background: "#FDFCFB", border: `1px solid ${RULE}`, borderRadius: "10px", padding: "0.9rem 1rem", borderLeft: `4px solid ${MUTED}` }}>
                  <div style={{ fontSize: "0.58rem", color: MUTED, textTransform: "uppercase", marginBottom: "0.4rem", fontFamily: "serif", letterSpacing: "0.12em" }}>
                    Classification Note: Motif
                  </div>
                  <p style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.85rem", color: INK, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>
                    {entry.motif}
                  </p>
                </div>
              )}

              {/* 4. Visual Description */}
              {entry.visual && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderLeft:`4px solid ${colors.accent}`,borderRadius:"10px",padding:"0.9rem 1rem"}}>
                  <div style={{fontSize:"0.58rem",color:colors.accent,textTransform:"uppercase",marginBottom:"0.4rem", letterSpacing:"0.1em"}}>Visual Description</div>
                  <p style={{fontFamily:"'EB Garamond',serif",fontSize:"0.92rem",color:INK,margin:0,lineHeight:1.75}}>{entry.visual}</p>
                </div>
              )}

              {/* 5. Colour Palette */}
              {entry.colors?.length > 0 && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"10px",padding:"0.8rem 1rem"}}>
                  <div style={{fontSize:"0.58rem",color:MUTED,textTransform:"uppercase",marginBottom:"0.65rem", letterSpacing:"0.1em"}}>Colour Palette</div>
                  <div style={{display:"flex",gap:"0.7rem",flexWrap:"wrap",alignItems:"center"}}>
                    {entry.colors.map((c, i) => {
                      const hex = c.match(/#[0-9A-Fa-f]{3,6}/)?.[0];
                      const label = c.replace(/#[0-9A-Fa-f]{6}\s*/, "").trim();
                      return (
                        <div key={i} style={{display:"flex",alignItems:"center",gap:"0.45rem"}}>
                          {hex && <div style={{width:18,height:18,borderRadius:"50%",background:hex,border:"1px solid rgba(0,0,0,0.1)"}}/>}
                          <span style={{fontSize:"0.78rem",fontFamily:"'EB Garamond',serif"}}>{label || c}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 6. Key Garments */}
              {entry.garments?.length > 0 && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"10px",padding:"0.8rem 1rem"}}>
                  <div style={{fontSize:"0.58rem",color:MUTED,textTransform:"uppercase",marginBottom:"0.6rem", letterSpacing:"0.1em"}}>Key Garments</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>
                    {entry.garments.map((g,i) => (
                      <span key={i} style={{background:"#fff",border:`1px solid ${RULE}`,borderRadius:"20px",padding:"0.22rem 0.7rem",fontSize:"0.8rem",fontFamily:"'EB Garamond',serif"}}>{g}</span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={{background:SOFT,borderRadius:"10px",padding:"1rem",textAlign:"center", border:`1px solid ${RULE}`}}>
              <p style={{fontFamily:"'EB Garamond',serif",fontSize:"0.9rem",color:MUTED,margin:0,fontStyle:"italic"}}>
                Full field guide entry pending.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// ── PhylumView ────────────────────────────────────────────────────────────────
function PhylumView({ phylum, onSpeciesClick }) {
  const [activeClass, setActiveClass] = useState(null);
  const colors = PHYLUM_COLORS[phylum.number];
  const displayClasses = activeClass === null ? phylum.classes : phylum.classes.filter(c => c.name === activeClass);

  return (
    <div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"0.35rem",marginBottom:"1.5rem"}}>
        <button onClick={()=>setActiveClass(null)} style={{padding:"0.3rem 0.85rem",borderRadius:"20px",border:"none",background:activeClass===null?colors.bg:SOFT,color:activeClass===null?colors.accent:MUTED,cursor:"pointer",fontSize:"0.72rem",fontFamily:"'EB Garamond',Georgia,serif",transition:"all 0.15s"}}>
          All classes
        </button>
        {phylum.classes.map(c => (
          <button key={c.name} onClick={()=>setActiveClass(activeClass===c.name?null:c.name)}
            style={{padding:"0.3rem 0.85rem",borderRadius:"20px",border:"none",background:activeClass===c.name?colors.bg:SOFT,color:activeClass===c.name?colors.accent:MUTED,cursor:"pointer",fontSize:"0.72rem",fontFamily:"'EB Garamond',Georgia,serif",transition:"all 0.15s"}}>
            {c.name}
          </button>
        ))}
      </div>
      {displayClasses.map(cls => {
        const sc = cls.species.filter(s=>isSens(s[1])).length;
        const xc = cls.species.filter(s=>isCross(s[1])).length;
        return (
          <div key={cls.name} style={{marginBottom:"1.75rem"}}>
            <div style={{background:INK,color:"white",padding:"0.5rem 1rem",borderRadius:"8px",fontSize:"0.8rem",fontFamily:"'EB Garamond',Georgia,serif",letterSpacing:"0.04em",marginBottom:"0.75rem",borderLeft:`4px solid ${colors.accent}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>{cls.name}</span>
              <span style={{fontSize:"0.65rem",color:"#777",fontWeight:"normal"}}>
                {cls.species.length} species
                {sc>0&&<span style={{color:"#f87171",marginLeft:"0.5rem"}}>· {sc} sensitive</span>}
                {xc>0&&<span style={{color:"#93c5fd",marginLeft:"0.5rem"}}>· {xc} crossover</span>}
              </span>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>
              {cls.species.map(s => {
                const [sname,sflag]=s;
                const isS=isSens(sflag),isX=isCross(sflag);
                const hasContent=!!getEntry(sname)||!!getNote(phylum.number,sname);
                return (
                  <button key={sname} className="species-pill" onClick={()=>onSpeciesClick(s,phylum.number,cls.name)}
                    style={{padding:"0.3rem 0.78rem",borderRadius:"20px",border:`1px solid ${isS?"#FECACA":isX?"#E0E0F0":RULE}`,background:isS?"#FFF5F5":isX?"#F8F8FF":IVORY,color:isS?RED:isX?"#6060C0":INK,cursor:"pointer",fontSize:"0.82rem",fontFamily:"'EB Garamond',Georgia,serif"}}
                    onMouseEnter={e=>{e.currentTarget.style.background=colors.bg;e.currentTarget.style.color=colors.accent;e.currentTarget.style.borderColor=colors.accent;}}
                    onMouseLeave={e=>{e.currentTarget.style.background=isS?"#FFF5F5":isX?"#F8F8FF":IVORY;e.currentTarget.style.color=isS?RED:isX?"#6060C0":INK;e.currentTarget.style.borderColor=isS?"#FECACA":isX?"#E0E0F0":RULE;}}
                  >
                    {isS&&"⚠ "}{sname}{isX&&" ◆"}
                    {hasContent&&<span style={{width:5,height:5,background:colors.accent,borderRadius:"50%",display:"inline-block",marginLeft:5,verticalAlign:"middle",opacity:0.75}}/>}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── SearchView ────────────────────────────────────────────────────────────────
function SearchView({ results, query, onSpeciesClick }) {
  // If no search is happening, show the "Empty" state
  if (!query || query.length < 2) return (
    <div style={{textAlign:"center",padding:"5rem 2rem",color:MUTED}}>
      <div style={{fontSize:"2.5rem",marginBottom:"1rem",opacity:0.4}}>◉</div>
      <div style={{fontFamily:"'EB Garamond',Georgia,serif",fontStyle:"italic",fontSize:"1.1rem"}}>
        Search all {ATLAS_DATA.total.toLocaleString()} species, field notes, and entries…
      </div>
    </div>
  );

  // Show the results
  return (
    <div>
      <div style={{marginBottom:"1.25rem",color:MUTED,fontFamily:"'EB Garamond',Georgia,serif",fontSize:"0.9rem"}}>
        {results.length >= 100 ? "100+" : results.length} result{results.length !== 1 && "s"} for <strong style={{color:INK}}>"{query}"</strong>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
        {results.map(({species, phylumNum, phylumEmoji, className, matchType}) => {
          const colors = PHYLUM_COLORS[phylumNum];
          const isS = isSens(species[1]);
          const isX = isCross(species[1]);
          return (
            <button key={`${phylumNum}-${species[0]}`} onClick={() => onSpeciesClick(species, phylumNum, className)}
              style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.7rem 0.9rem",borderRadius:"10px",border:`1px solid ${RULE}`,background:IVORY,cursor:"pointer",textAlign:"left",transition:"all 0.12s"}}
              onMouseEnter={e => {e.currentTarget.style.background = SOFT; e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.transform = "translateX(2px)";}}
              onMouseLeave={e => {e.currentTarget.style.background = IVORY; e.currentTarget.style.borderColor = RULE; e.currentTarget.style.transform = "none";}}
            >
              <span style={{background:colors.bg, color:colors.accent, padding:"0.15rem 0.55rem", borderRadius:"20px", fontSize:"0.65rem", fontFamily:"serif", whiteSpace:"nowrap"}}>{phylumEmoji} P{phylumNum}</span>
              <span style={{fontFamily:"'EB Garamond',Georgia,serif", fontSize:"0.95rem", color:INK, flex:1}}>{hl(species[0], query)}</span>
              <span style={{fontSize:"0.7rem", color:MUTED, fontFamily:"serif", maxWidth:"150px", textAlign:"right", flexShrink:0}}>{className}</span>
              {isS && <span style={{color:RED, fontSize:"0.7rem", flexShrink:0}}>⚠</span>}
              {isX && <span style={{color:"#6060C0", fontSize:"0.7rem", flexShrink:0}}>◆</span>}
              {matchType !== "name" && <span style={{fontSize:"0.6rem", color:MUTED, fontFamily:"serif", background:SOFT, padding:"0.1rem 0.4rem", borderRadius:"10px", flexShrink:0}}>in {matchType}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
// ── StatsView ─────────────────────────────────────────────────────────────────
function StatsView() {
  const stats = useMemo(() => {
    let sensitive = 0, crossover = 0, withEntries = 0;
    for (const p of ATLAS_DATA.phyla) {
      for (const c of p.classes) {
        for (const s of c.species) {
          if (isSens(s[1])) sensitive++;
          if (isCross(s[1])) crossover++;
          if (getEntry(s[0])) withEntries++;
        }
      }
    }
    return { 
      sensitive, 
      crossover, 
      withEntries, 
      totalClasses: ATLAS_DATA.phyla.reduce((a, p) => a + p.classes.length, 0) 
    };
  }, []);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "0.85rem", marginBottom: "2.5rem" }}>
        {[
          [ATLAS_DATA.total.toLocaleString(), "Total Species", ACCENT],
          [12, "Phyla", "#7B68EE"],
          [stats.totalClasses, "Classes", "#52B788"],
          [stats.sensitive, "Sensitive", RED],
          [stats.crossover, "Crossover", "#6060C0"],
          [stats.withEntries, "Full Entries", "#C4A35A"]
        ].map(([v, l, c]) => (
          <div key={l} style={{ background: IVORY, border: `1px solid ${RULE}`, borderTop: `3px solid ${c}`, borderRadius: "10px", padding: "1.1rem" }}>
            <div style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "1.8rem", fontWeight: 500, color: c, lineHeight: 1.1, marginBottom: "0.35rem" }}>{v}</div>
            <div style={{ fontFamily: "serif", fontSize: "0.68rem", color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontFamily: "'EB Garamond',Georgia,serif", color: INK, marginBottom: "1.25rem", fontSize: "1.05rem", borderBottom: `1px solid ${RULE}`, paddingBottom: "0.5rem", fontWeight: 400 }}>
        Distribution by Phylum
      </h3>

      {ATLAS_DATA.phyla.map((p, idx) => {
        const colors = PHYLUM_COLORS[p.number];
        const pct = (p.count / ATLAS_DATA.total * 100).toFixed(1);
        const sens = p.classes.reduce((a, c) => a + c.species.filter(s => isSens(s[1])).length, 0);
        const cross = p.classes.reduce((a, c) => a + c.species.filter(s => isCross(s[1])).length, 0);

        return (
          <div 
            key={p.number} 
            className="phylum-card" 
            style={{ marginBottom: "0.9rem", animationDelay: `${idx * 0.05}s` }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem" }}>
              <span style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "0.88rem", color: INK }}>{p.emoji} {p.name}</span>
              <span style={{ fontFamily: "serif", fontSize: "0.75rem", color: MUTED, display: "flex", gap: "0.75rem" }}>
                {sens > 0 && <span style={{ color: RED }}>⚠ {sens}</span>}
                {cross > 0 && <span style={{ color: "#6060C0" }}>◆ {cross}</span>}
                <span>{p.count}</span>
              </span>
            </div>
            <div style={{ background: "#E8E0D8", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
              <div 
                style={{ 
                  background: `linear-gradient(90deg, ${colors.accent}cc, ${colors.accent})`, 
                  height: "100%", 
                  width: `${pct}%`, 
                  borderRadius: "4px", 
                  transition: "width 0.8s ease" 
                }} 
              />
            </div>
          </div>
        );
      })}
    </div> // This closes the main StatsView container
  );
}
// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  // 1. All your "States" (Memory)
  const [view, setView] = useState("home");
  const [activePhylum, setActivePhylum] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedPhylumNum, setSelectedPhylumNum] = useState(null);
  const [selectedClassName, setSelectedClassName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // 2. Your animations and derived data
  const animatedCount = useCountUp(ATLAS_DATA.total, 1800);
  const currentPhylum = activePhylum !== null ? ATLAS_DATA.phyla.find(p => p.number === activePhylum) : null;

  // 3. The "Actions" (Functions)
  const handleSpeciesClick = useCallback((species, phylumNum, className) => {
    setSelectedSpecies(species);
    setSelectedPhylumNum(phylumNum);
    setSelectedClassName(className);
  }, []);

  function switchView(v) { 
    setView(v); 
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }

  function handleSearch(val) {
    setSearchQuery(val);
    // This tells your search tool to find matches across names, notes, and entries
    const found = queryAtlas(val); 
    setSearchResults(found);

    if (val.length > 1) {
      setView("search");
    } else if (!val) {
      setView(activePhylum ? "phylum" : "home");
    }
  }

  function goHome() { 
    setView("home"); 
    setActivePhylum(null); 
    setSearchQuery(""); 
    setSelectedSpecies(null); 
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }

  // 4. THE ONLY RETURN (The Visuals)
  return (
    <>
      <GlobalStyles />
      <div style={{ background: IVORY, minHeight: "100vh" }}>
        
        {/* Navigation Bar */}
        <div style={{ background: INK, padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
          <button onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <span style={{ fontFamily: "'EB Garamond',serif", fontSize: "1.05rem", color: IVORY }}>Atlas of</span>
            <span style={{ fontFamily: "'EB Garamond',serif", fontSize: "1.05rem", color: ACCENT, fontStyle: "italic" }}> Fashion Aesthetics</span>
          </button>
          
          <input
            className="search-input"
            placeholder={`Search ${ATLAS_DATA.total.toLocaleString()} species…`}
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
            style={{ flex: 1, padding: "0.42rem 1rem", borderRadius: "20px", border: "1px solid #3a3a3a", background: "#222", color: IVORY, outline: "none" }}
          />

          <button onClick={() => switchView("stats")} style={{ background: view === "stats" ? ACCENT : "transparent", border: `1px solid ${view === "stats" ? ACCENT : "#444"}`, color: view === "stats" ? INK : "#888", padding: "0.32rem 0.7rem", borderRadius: "7px", cursor: "pointer" }}>📊</button>
        </div>

        {/* Main Content Area */}
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "1.5rem" }}>

          {/* HOME VIEW */}
          {view === "home" && (
            <div>
              <div style={{ textAlign: "center", padding: "3rem 0 3.5rem", borderBottom: `1px solid ${RULE}`, marginBottom: "2rem" }}>
                <div style={{ fontFamily: "serif", fontSize: "0.72rem", color: ACCENT, letterSpacing: "0.28em", textTransform: "uppercase" }}>Kingdom · Fashion Aesthetic Culture</div>
                <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: "2.8rem", color: INK }}>Atlas of <em>Fashion Aesthetics</em></h1>
                <p style={{ color: MUTED, fontStyle: "italic" }}><span style={{ color: ACCENT, fontWeight: 500 }}>{animatedCount.toLocaleString()}</span> Species · 12 Phyla · 2026 Edition</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "0.8rem" }}>
                {ATLAS_DATA.phyla.map((p, idx) => {
                  const colors = PHYLUM_COLORS[p.number];
                  return (
                    <button key={p.number} className="phylum-card" onClick={() => { setActivePhylum(p.number); switchView("phylum"); }}
                      style={{ background: IVORY, border: `1px solid ${RULE}`, borderTop: `3px solid ${colors.accent}`, borderRadius: "12px", padding: "1.3rem", cursor: "pointer", textAlign: "left", animationDelay: `${idx * 0.05}s` }}
                    >
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.45rem" }}>{p.emoji}</div>
                      <div style={{ fontSize: "0.58rem", color: ACCENT, fontFamily: "serif" }}>PHYLUM {p.number}</div>
                      <div style={{ fontWeight: 500, fontSize: "1rem" }}>{p.name}</div>
                      <div style={{ fontSize: "0.7rem", color: MUTED }}>{p.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* PHYLUM VIEW */}
          {view === "phylum" && currentPhylum && (
            <div>
              <button onClick={goHome} style={{ background: "none", border: "none", color: ACCENT, cursor: "pointer", marginBottom: "1.25rem" }}>← All Phyla</button>
              <h2 style={{ fontSize: "2rem" }}>{currentPhylum.emoji} {currentPhylum.name}</h2>
              <PhylumView phylum={currentPhylum} onSpeciesClick={handleSpeciesClick} />
            </div>
          )}

          {/* SEARCH VIEW */}
          {view === "search" && (
            <SearchView results={searchResults} query={searchQuery} onSpeciesClick={handleSpeciesClick} />
          )}

          {/* STATS VIEW */}
          {view === "stats" && (
            <StatsView />
          )}

        </div>

        {/* FIELD GUIDE MODAL */}
        {selectedSpecies && (
          <SpeciesCard
            species={selectedSpecies}
            phylumNum={selectedPhylumNum}
            className={selectedClassName}
            onClose={() => setSelectedSpecies(null)}
            onSpeciesClick={handleSpeciesClick}
          />
        )}
      </div>
    </>
  );
}
