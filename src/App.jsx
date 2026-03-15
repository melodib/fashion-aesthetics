import { useState, useMemo, useCallback } from "react";
import { ATLAS_DATA } from "./atlasData.js";
import { NOTES } from "./notes.js";
import { SPECIES_ENTRIES } from "./speciesEntries.js";

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
  5:  { bg: "#0F2419", accent: "#52B788" },
  6:  { bg: "#1C1A14", accent: "#C4A35A" },
  7:  { bg: "#1A1A1A", accent: "#E07B54" },
  8:  { bg: "#1A1510", accent: "#D4AF37" },
  9:  { bg: "#1A1020", accent: "#E91E8C" },
  10: { bg: "#0F0F2A", accent: "#9C6ADE" },
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

const getNote  = (num, name) => NOTES[`${num}|${name}`] || null;
const getEntry = (name) => SPECIES_ENTRIES[name] || null;
const isSens   = f => f === "S" || f === "SX";
const isCross  = f => f === "X" || f === "SX";
const phylumOf = num => ATLAS_DATA.phyla.find(p => p.number === num);

function hl(text, q) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return (<>{text.slice(0,i)}<mark style={{background:"#B8896A33",borderRadius:2,color:"inherit"}}>{text.slice(i,i+q.length)}</mark>{text.slice(i+q.length)}</>);
}

function Field({ label, accent, left }) {
  return (
    <div style={{fontSize:"0.6rem",color:accent||MUTED,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem",borderLeft:left?`3px solid ${left}`:undefined,paddingLeft:left?"0.5rem":undefined}}>
      {label}
    </div>
  );
}

// ── SpeciesCard — full entry, no expand button ────────────────────────────────
function SpeciesCard({ species, phylumNum, className, onClose }) {
  const [name, flag] = species;
  const colors     = PHYLUM_COLORS[phylumNum];
  const noteData   = getNote(phylumNum, name);
  const entry      = getEntry(name);
  const sensitive  = isSens(flag);
  const crossover  = isCross(flag);
  const phylumName = phylumOf(phylumNum)?.name || "";

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,padding:"1rem"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:IVORY,borderRadius:"16px",width:"100%",maxWidth:"580px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 32px 100px rgba(0,0,0,0.4)"}}>

        {/* Sticky phylum-coloured header */}
        <div style={{background:colors.bg,borderRadius:"16px 16px 0 0",padding:"1.3rem 1.5rem 1rem",position:"sticky",top:0,zIndex:10}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div style={{fontSize:"0.6rem",color:colors.accent,letterSpacing:"0.14em",textTransform:"uppercase",fontFamily:"Georgia,serif",marginBottom:"0.3rem",opacity:0.85}}>
                Fashion Aesthetic Culture &nbsp;›&nbsp; {phylumName} &nbsp;›&nbsp; {className}
              </div>
              <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.45rem",color:"#fff",margin:0,lineHeight:1.2,fontStyle:"italic"}}>{name}</h2>
            </div>
            <button onClick={onClose} style={{background:"rgba(255,255,255,0.12)",border:"none",borderRadius:"50%",width:32,height:32,cursor:"pointer",color:"#fff",fontSize:"1.2rem",lineHeight:"32px",flexShrink:0,marginLeft:"1rem"}}>×</button>
          </div>
          <div style={{display:"flex",gap:"0.35rem",flexWrap:"wrap",marginTop:"0.7rem"}}>
            <span style={{background:"rgba(255,255,255,0.13)",color:colors.accent,padding:"0.12rem 0.55rem",borderRadius:"20px",fontSize:"0.63rem",fontFamily:"serif"}}>Phylum {phylumNum}</span>
            {entry?.rarity && <span style={{background:RARITY_COLOR[entry.rarity]||MUTED,color:"#fff",padding:"0.12rem 0.55rem",borderRadius:"20px",fontSize:"0.63rem",fontFamily:"serif"}}>{entry.rarity}</span>}
            {sensitive && <span style={{background:RED,color:"#fff",padding:"0.12rem 0.55rem",borderRadius:"20px",fontSize:"0.63rem",fontFamily:"serif",fontWeight:"bold"}}>⚠ SENSITIVE</span>}
            {crossover && <span style={{background:"rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.75)",padding:"0.12rem 0.55rem",borderRadius:"20px",fontSize:"0.63rem",fontFamily:"serif"}}>◆ CROSSOVER</span>}
          </div>
        </div>

        {/* Body */}
        <div style={{padding:"1.25rem 1.5rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.9rem"}}>

          {sensitive && (
            <div style={{background:"#FFF5F5",border:"1px solid #FECACA",borderLeft:`4px solid ${RED}`,borderRadius:"8px",padding:"0.7rem 1rem"}}>
              <div style={{fontSize:"0.6rem",color:RED,fontFamily:"serif",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.25rem",fontWeight:"bold"}}>Sensitive Entry</div>
              <p style={{fontFamily:"Georgia,serif",fontSize:"0.81rem",color:"#7F1D1D",margin:0,lineHeight:1.6}}>
                This aesthetic references a living cultural tradition, religious practice, or ethically complex history. Engage with scholarly care.
              </p>
            </div>
          )}

          {entry ? (
            <>
              {/* Summary */}
              <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:INK,lineHeight:1.8,margin:0,fontStyle:"italic"}}>
                {entry.summary}
              </p>

              {/* Era + Mood */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
                {entry.era && (
                  <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"8px",padding:"0.5rem 0.75rem"}}>
                    <div style={{fontSize:"0.58rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.2rem"}}>Era</div>
                    <div style={{fontFamily:"Georgia,serif",fontSize:"0.82rem",color:INK}}>{entry.era}</div>
                  </div>
                )}
                {entry.mood && (
                  <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"8px",padding:"0.5rem 0.75rem"}}>
                    <div style={{fontSize:"0.58rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.2rem"}}>Defining Mood</div>
                    <div style={{fontFamily:"Georgia,serif",fontSize:"0.82rem",color:INK,fontStyle:"italic"}}>{entry.mood}</div>
                  </div>
                )}
              </div>

              {/* Colour palette */}
              {entry.colors?.length > 0 && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"8px",padding:"0.75rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.6rem"}}>Colour Palette</div>
                  <div style={{display:"flex",gap:"0.6rem",flexWrap:"wrap",alignItems:"center"}}>
                    {entry.colors.map((c, i) => {
                      const hex   = c.match(/#[0-9A-Fa-f]{6}/)?.[0];
                      const label = c.replace(/#[0-9A-Fa-f]{6}\s*/, "").trim();
                      return (
                        <div key={i} style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
                          {hex && <div style={{width:16,height:16,borderRadius:"50%",background:hex,border:"1px solid rgba(0,0,0,0.15)",flexShrink:0}}/>}
                          <span style={{fontFamily:"Georgia,serif",fontSize:"0.75rem",color:INK}}>{label || c}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Visual */}
              {entry.visual && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderLeft:`4px solid ${colors.accent}`,borderRadius:"8px",padding:"0.9rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:colors.accent,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem"}}>Visual Description</div>
                  <p style={{fontFamily:"Georgia,serif",fontSize:"0.88rem",color:INK,margin:0,lineHeight:1.7}}>{entry.visual}</p>
                </div>
              )}

              {/* Key garments */}
              {entry.garments?.length > 0 && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"8px",padding:"0.75rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.6rem"}}>Key Garments</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.35rem"}}>
                    {entry.garments.map((g,i) => (
                      <span key={i} style={{background:"#fff",border:`1px solid ${RULE}`,borderRadius:"20px",padding:"0.2rem 0.65rem",fontSize:"0.78rem",fontFamily:"Georgia,serif",color:INK}}>{g}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Habitat */}
              {entry.habitat && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"8px",padding:"0.9rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem"}}>Natural Habitat</div>
                  <p style={{fontFamily:"Georgia,serif",fontSize:"0.88rem",color:INK,margin:0,lineHeight:1.7}}>{entry.habitat}</p>
                </div>
              )}

              {/* Cultural context */}
              {entry.context && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderLeft:`4px solid ${sensitive ? RED : ACCENT}`,borderRadius:"8px",padding:"0.9rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem"}}>Cultural Context</div>
                  <p style={{fontFamily:"Georgia,serif",fontSize:"0.88rem",color:INK,margin:0,lineHeight:1.7}}>{entry.context}</p>
                </div>
              )}

              {/* Media touchstones */}
              {entry.media?.length > 0 && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"8px",padding:"0.75rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.55rem"}}>Media Touchstones</div>
                  <div style={{display:"flex",flexDirection:"column",gap:"0.3rem"}}>
                    {entry.media.map((m,i) => (
                      <div key={i} style={{fontFamily:"Georgia,serif",fontSize:"0.82rem",color:INK,fontStyle:"italic"}}>{m}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Crossover */}
              {noteData?.cross && (
                <div style={{background:"#F8F8FF",border:"1px solid #E0E0F0",borderLeft:`4px solid ${colors.accent}`,borderRadius:"8px",padding:"0.9rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:colors.accent,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem"}}>◆ Crossover Classification</div>
                  <p style={{fontFamily:"Georgia,serif",fontSize:"0.88rem",color:INK,margin:0,lineHeight:1.7}}>{noteData.cross}</p>
                </div>
              )}

              {/* See also */}
              {entry.see_also?.length > 0 && (
                <div style={{background:SOFT,border:`1px solid ${RULE}`,borderRadius:"8px",padding:"0.75rem 1rem"}}>
                  <div style={{fontSize:"0.6rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.55rem"}}>See Also</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.35rem"}}>
                    {entry.see_also.map((s,i) => (
                      <span key={i} style={{background:"#fff",border:`1px solid ${colors.accent}`,color:colors.accent,borderRadius:"20px",padding:"0.2rem 0.65rem",fontSize:"0.78rem",fontFamily:"Georgia,serif"}}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* No full entry yet */
            <div style={{background:SOFT,borderRadius:"8px",border:`1px solid ${RULE}`,padding:"0.9rem 1rem"}}>
              {noteData?.note ? (
                <>
                  <div style={{fontSize:"0.6rem",color:ACCENT,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem"}}>Field Note</div>
                  <p style={{fontFamily:"Georgia,serif",fontSize:"0.88rem",color:INK,margin:0,lineHeight:1.7,fontStyle:"italic"}}>{noteData.note}</p>
                </>
              ) : (
                <p style={{fontFamily:"Georgia,serif",fontSize:"0.85rem",color:MUTED,margin:0,lineHeight:1.6,fontStyle:"italic"}}>
                  Full entry — era, visual description, key garments, colour palette, and cultural context — being added phylum by phylum.
                </p>
              )}
            </div>
          )}

          {/* Taxonomy footer — always shown */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem",paddingTop:"0.75rem",borderTop:`1px solid ${RULE}`}}>
            {[["Kingdom","Fashion Aesthetic Culture"],["Phylum",`${phylumNum} · ${phylumName}`],["Class",className],["Species",name]].map(([label,value]) => (
              <div key={label}>
                <div style={{fontSize:"0.58rem",color:MUTED,fontFamily:"serif",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.15rem"}}>{label}</div>
                <div style={{fontSize:"0.78rem",color:INK,fontFamily:"Georgia,serif"}}>{value}</div>
              </div>
            ))}
          </div>
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
        <button onClick={()=>setActiveClass(null)} style={{padding:"0.3rem 0.8rem",borderRadius:"20px",border:"none",background:activeClass===null?colors.bg:SOFT,color:activeClass===null?colors.accent:MUTED,cursor:"pointer",fontSize:"0.7rem",fontFamily:"serif"}}>All classes</button>
        {phylum.classes.map(c => (
          <button key={c.name} onClick={()=>setActiveClass(activeClass===c.name?null:c.name)}
            style={{padding:"0.3rem 0.8rem",borderRadius:"20px",border:"none",background:activeClass===c.name?colors.bg:SOFT,color:activeClass===c.name?colors.accent:MUTED,cursor:"pointer",fontSize:"0.7rem",fontFamily:"serif"}}>
            {c.name}
          </button>
        ))}
      </div>
      {displayClasses.map(cls => {
        const sc = cls.species.filter(s=>isSens(s[1])).length;
        const xc = cls.species.filter(s=>isCross(s[1])).length;
        return (
          <div key={cls.name} style={{marginBottom:"1.75rem"}}>
            <div style={{background:INK,color:"white",padding:"0.5rem 1rem",borderRadius:"7px",fontSize:"0.78rem",fontFamily:"serif",letterSpacing:"0.04em",marginBottom:"0.75rem",borderLeft:`4px solid ${colors.accent}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>{cls.name}</span>
              <span style={{fontSize:"0.65rem",color:"#888",fontWeight:"normal"}}>
                {cls.species.length} species
                {sc>0 && <span style={{color:"#f87171",marginLeft:"0.5rem"}}>· {sc} sensitive</span>}
                {xc>0 && <span style={{color:"#93c5fd",marginLeft:"0.5rem"}}>· {xc} crossover</span>}
              </span>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>
              {cls.species.map(s => {
                const [sname, sflag] = s;
                const isS = isSens(sflag), isX = isCross(sflag);
                const hasContent = !!getEntry(sname) || !!getNote(phylum.number, sname);
                return (
                  <button key={sname} onClick={()=>onSpeciesClick(s, phylum.number, cls.name)}
                    style={{padding:"0.3rem 0.75rem",borderRadius:"20px",border:`1px solid ${isS?"#FECACA":isX?"#E0E0F0":RULE}`,background:isS?"#FFF5F5":isX?"#F8F8FF":IVORY,color:isS?RED:isX?"#6060C0":INK,cursor:"pointer",fontSize:"0.8rem",fontFamily:"Georgia,serif",transition:"all 0.15s"}}
                    onMouseEnter={e=>{e.currentTarget.style.background=colors.bg;e.currentTarget.style.color=colors.accent;e.currentTarget.style.borderColor=colors.accent;}}
                    onMouseLeave={e=>{e.currentTarget.style.background=isS?"#FFF5F5":isX?"#F8F8FF":IVORY;e.currentTarget.style.color=isS?RED:isX?"#6060C0":INK;e.currentTarget.style.borderColor=isS?"#FECACA":isX?"#E0E0F0":RULE;}}
                  >
                    {isS&&"⚠ "}{sname}{isX&&" ◆"}
                    {hasContent && <span style={{width:5,height:5,background:colors.accent,borderRadius:"50%",display:"inline-block",marginLeft:5,verticalAlign:"middle",opacity:0.7}}/>}
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
function SearchView({ query, onSpeciesClick }) {
  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const matches = [];
    for (const p of ATLAS_DATA.phyla) {
      for (const c of p.classes) {
        for (const s of c.species) {
          const nd = getNote(p.number, s[0]);
          const ent = getEntry(s[0]);
          const hit = s[0].toLowerCase().includes(q) || nd?.note?.toLowerCase().includes(q) || nd?.cross?.toLowerCase().includes(q) || ent?.summary?.toLowerCase().includes(q) || ent?.context?.toLowerCase().includes(q);
          if (hit) {
            const matchType = s[0].toLowerCase().includes(q) ? "name" : nd?.note?.toLowerCase().includes(q) ? "note" : nd?.cross?.toLowerCase().includes(q) ? "crossover" : "entry";
            matches.push({ species:s, phylumNum:p.number, phylumEmoji:p.emoji, className:c.name, matchType });
            if (matches.length >= 100) return matches;
          }
        }
      }
    }
    return matches;
  }, [query]);

  if (!query || query.length < 2) return (
    <div style={{textAlign:"center",padding:"5rem 2rem",color:MUTED,fontFamily:"Georgia,serif"}}>
      <div style={{fontSize:"2.5rem",marginBottom:"1rem"}}>🔍</div>
      <div style={{fontStyle:"italic",fontSize:"1rem"}}>Search all {ATLAS_DATA.total.toLocaleString()} species, field notes, and entries…</div>
    </div>
  );

  return (
    <div>
      <div style={{marginBottom:"1.25rem",color:MUTED,fontFamily:"serif",fontSize:"0.85rem"}}>
        {results.length===100 ? "100+" : results.length} result{results.length!==1&&"s"} for <strong style={{color:INK}}>"{query}"</strong>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
        {results.map(({species,phylumNum,phylumEmoji,className,matchType}) => {
          const colors = PHYLUM_COLORS[phylumNum];
          const isS = isSens(species[1]), isX = isCross(species[1]);
          return (
            <button key={`${phylumNum}-${species[0]}`} onClick={()=>onSpeciesClick(species,phylumNum,className)}
              style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.65rem 0.9rem",borderRadius:"9px",border:`1px solid ${RULE}`,background:IVORY,cursor:"pointer",textAlign:"left",transition:"all 0.15s"}}
              onMouseEnter={e=>{e.currentTarget.style.background=SOFT;e.currentTarget.style.borderColor=ACCENT;}}
              onMouseLeave={e=>{e.currentTarget.style.background=IVORY;e.currentTarget.style.borderColor=RULE;}}
            >
              <span style={{background:colors.bg,color:colors.accent,padding:"0.15rem 0.5rem",borderRadius:"20px",fontSize:"0.65rem",fontFamily:"serif",whiteSpace:"nowrap"}}>{phylumEmoji} P{phylumNum}</span>
              <span style={{fontFamily:"Georgia,serif",fontSize:"0.9rem",color:INK,flex:1}}>{hl(species[0],query)}</span>
              <span style={{fontSize:"0.68rem",color:MUTED,fontFamily:"serif",maxWidth:"150px",textAlign:"right",flexShrink:0}}>{className}</span>
              {isS && <span style={{color:RED,fontSize:"0.7rem",flexShrink:0}}>⚠</span>}
              {isX && <span style={{color:"#6060C0",fontSize:"0.7rem",flexShrink:0}}>◆</span>}
              {matchType!=="name" && <span style={{fontSize:"0.6rem",color:MUTED,fontFamily:"serif",background:SOFT,padding:"0.1rem 0.4rem",borderRadius:"10px",flexShrink:0}}>in {matchType}</span>}
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
    let sensitive=0, crossover=0, withEntries=0;
    for (const p of ATLAS_DATA.phyla) for (const c of p.classes) for (const s of c.species) {
      if (isSens(s[1]))  sensitive++;
      if (isCross(s[1])) crossover++;
      if (getEntry(s[0])) withEntries++;
    }
    return { sensitive, crossover, withEntries, totalClasses: ATLAS_DATA.phyla.reduce((a,p)=>a+p.classes.length,0) };
  }, []);

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"0.85rem",marginBottom:"2.5rem"}}>
        {[[ATLAS_DATA.total.toLocaleString(),"Total Species",ACCENT],[12,"Phyla","#7B68EE"],[stats.totalClasses,"Classes","#52B788"],[stats.sensitive,"Sensitive",RED],[stats.crossover,"Crossover","#6060C0"],[stats.withEntries,"Full Entries","#C4A35A"]].map(([v,l,c])=>(
          <div key={l} style={{background:IVORY,border:`1px solid ${RULE}`,borderTop:`3px solid ${c}`,borderRadius:"10px",padding:"1.1rem"}}>
            <div style={{fontFamily:"Georgia,serif",fontSize:"1.7rem",fontWeight:"bold",color:c,lineHeight:1.1,marginBottom:"0.35rem"}}>{v}</div>
            <div style={{fontFamily:"serif",fontSize:"0.68rem",color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em"}}>{l}</div>
          </div>
        ))}
      </div>
      <h3 style={{fontFamily:"Georgia,serif",color:INK,marginBottom:"1.25rem",fontSize:"1rem",borderBottom:`1px solid ${RULE}`,paddingBottom:"0.5rem"}}>Distribution by Phylum</h3>
      {ATLAS_DATA.phyla.map(p => {
        const colors = PHYLUM_COLORS[p.number];
        const pct = (p.count/ATLAS_DATA.total*100).toFixed(1);
        const sens  = p.classes.reduce((a,c)=>a+c.species.filter(s=>isSens(s[1])).length,0);
        const cross = p.classes.reduce((a,c)=>a+c.species.filter(s=>isCross(s[1])).length,0);
        return (
          <div key={p.number} style={{marginBottom:"0.85rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"0.25rem"}}>
              <span style={{fontFamily:"serif",fontSize:"0.82rem",color:INK}}>{p.emoji} {p.name}</span>
              <span style={{fontFamily:"serif",fontSize:"0.75rem",color:MUTED,display:"flex",gap:"0.75rem"}}>
                {sens>0  && <span style={{color:RED}}>⚠ {sens}</span>}
                {cross>0 && <span style={{color:"#6060C0"}}>◆ {cross}</span>}
                <span>{p.count}</span>
              </span>
            </div>
            <div style={{background:"#E8E0D8",borderRadius:"4px",height:"7px",overflow:"hidden"}}>
              <div style={{background:colors.accent,height:"100%",width:`${pct}%`,borderRadius:"4px"}}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView]                           = useState("home");
  const [activePhylum, setActivePhylum]           = useState(null);
  const [searchQuery, setSearchQuery]             = useState("");
  const [selectedSpecies, setSelectedSpecies]     = useState(null);
  const [selectedPhylumNum, setSelectedPhylumNum] = useState(null);
  const [selectedClassName, setSelectedClassName] = useState("");

  const handleSpeciesClick = useCallback((species,phylumNum,className)=>{
    setSelectedSpecies(species); setSelectedPhylumNum(phylumNum); setSelectedClassName(className);
  },[]);

  const currentPhylum = activePhylum !== null ? ATLAS_DATA.phyla.find(p=>p.number===activePhylum) : null;

  function handleSearch(val) {
    setSearchQuery(val);
    if (val.length>1) setView("search");
    else if (!val) setView(activePhylum?"phylum":"home");
  }

  function goHome() { setView("home"); setActivePhylum(null); setSearchQuery(""); setSelectedSpecies(null); }

  return (
    <div style={{background:IVORY,minHeight:"100vh"}}>
      <div style={{background:INK,padding:"0.7rem 1.5rem",display:"flex",alignItems:"center",gap:"1rem",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,0.4)"}}>
        <button onClick={goHome} style={{background:"none",border:"none",cursor:"pointer",padding:0,flexShrink:0}}>
          <span style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:IVORY}}>Atlas of</span>
          <span style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:ACCENT,fontStyle:"italic"}}> Fashion Aesthetics</span>
        </button>
        <input placeholder={`Search ${ATLAS_DATA.total.toLocaleString()} species…`} value={searchQuery} onChange={e=>handleSearch(e.target.value)}
          style={{flex:1,padding:"0.4rem 0.9rem",borderRadius:"20px",border:"1px solid #444",background:"#2a2a2a",color:IVORY,fontFamily:"Georgia,serif",fontSize:"0.85rem",outline:"none"}}/>
        <button onClick={()=>setView("stats")} style={{background:view==="stats"?ACCENT:"transparent",border:`1px solid ${view==="stats"?ACCENT:"#555"}`,color:view==="stats"?INK:"#999",padding:"0.3rem 0.65rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",flexShrink:0}}>📊</button>
      </div>

      <div style={{maxWidth:"960px",margin:"0 auto",padding:"1.5rem"}}>
        {view==="home" && (
          <div>
            <div style={{textAlign:"center",padding:"2.5rem 0 3rem",borderBottom:`1px solid ${ACCENT}`,marginBottom:"2rem"}}>
              <div style={{fontFamily:"serif",fontSize:"0.75rem",color:ACCENT,letterSpacing:"0.22em",textTransform:"uppercase",marginBottom:"0.6rem"}}>Kingdom · Fashion Aesthetic Culture</div>
              <h1 style={{fontFamily:"Georgia,serif",fontSize:"2.4rem",color:INK,margin:"0 0 0.5rem",lineHeight:1.2}}>Atlas of <em>Fashion Aesthetics</em></h1>
              <p style={{color:MUTED,fontFamily:"Georgia,serif",fontStyle:"italic",margin:"0 0 0.75rem",fontSize:"0.9rem"}}>{ATLAS_DATA.total.toLocaleString()} Species · 12 Phyla · 2026 Edition</p>
              <p style={{color:INK,fontFamily:"Georgia,serif",fontSize:"0.85rem",maxWidth:"500px",margin:"0 auto",lineHeight:1.8,opacity:0.75}}>
                Click any species to open its field guide entry — colour palette, visual description, key garments, habitat, cultural context, and media touchstones. Species with ● have full entries.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"0.75rem"}}>
              {ATLAS_DATA.phyla.map(p => {
                const colors = PHYLUM_COLORS[p.number];
                return (
                  <button key={p.number} onClick={()=>{setActivePhylum(p.number);setView("phylum");}}
                    style={{background:IVORY,border:`1px solid ${RULE}`,borderTop:`3px solid ${colors.accent}`,borderRadius:"10px",padding:"1.25rem",cursor:"pointer",textAlign:"left",transition:"all 0.2s"}}
                    onMouseEnter={e=>{const el=e.currentTarget;el.style.background=colors.bg;el.style.borderColor=colors.accent;el.querySelectorAll(".pn,.pd").forEach((x,i)=>{x.style.color=i===0?colors.accent:"#aaa";});}}
                    onMouseLeave={e=>{const el=e.currentTarget;el.style.background=IVORY;el.style.borderColor=RULE;el.querySelectorAll(".pn,.pd").forEach((x,i)=>{x.style.color=i===0?INK:MUTED;});}}
                  >
                    <div style={{fontSize:"1.4rem",marginBottom:"0.4rem"}}>{p.emoji}</div>
                    <div style={{fontSize:"0.6rem",color:ACCENT,fontFamily:"serif",letterSpacing:"0.1em",marginBottom:"0.2rem"}}>PHYLUM {p.number}</div>
                    <div className="pn" style={{fontFamily:"Georgia,serif",fontSize:"0.95rem",fontWeight:"bold",color:INK,marginBottom:"0.25rem",transition:"color 0.2s"}}>{p.name}</div>
                    <div className="pd" style={{fontFamily:"serif",fontSize:"0.7rem",color:MUTED,lineHeight:1.4,marginBottom:"0.5rem",transition:"color 0.2s"}}>{p.description}</div>
                    <div style={{fontFamily:"serif",fontSize:"0.7rem",color:colors.accent}}>{p.count} species · {p.classes.length} classes</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {view==="phylum" && currentPhylum && (
          <div>
            <button onClick={goHome} style={{background:"none",border:"none",color:ACCENT,cursor:"pointer",fontFamily:"serif",fontSize:"0.85rem",padding:0,marginBottom:"1.25rem"}}>← All Phyla</button>
            <div style={{display:"flex",alignItems:"flex-start",gap:"1rem",marginBottom:"1.75rem",paddingBottom:"1.25rem",borderBottom:`1px solid ${RULE}`}}>
              <span style={{fontSize:"2.2rem",lineHeight:1}}>{currentPhylum.emoji}</span>
              <div>
                <div style={{fontSize:"0.65rem",color:ACCENT,fontFamily:"serif",letterSpacing:"0.12em",textTransform:"uppercase"}}>Phylum {currentPhylum.number}</div>
                <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.9rem",color:INK,margin:"0.1rem 0 0.3rem"}}>{currentPhylum.name}</h2>
                <div style={{color:MUTED,fontFamily:"serif",fontSize:"0.82rem"}}>{currentPhylum.description} · {currentPhylum.count} species · {currentPhylum.classes.length} classes</div>
              </div>
            </div>
            <PhylumView phylum={currentPhylum} onSpeciesClick={handleSpeciesClick}/>
          </div>
        )}

        {view==="search" && <SearchView query={searchQuery} onSpeciesClick={handleSpeciesClick}/>}

        {view==="stats" && (
          <div>
            <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.5rem",color:INK,marginBottom:"1.5rem",paddingBottom:"0.75rem",borderBottom:`1px solid ${ACCENT}`}}>Atlas Statistics · 2026 Edition</h2>
            <StatsView/>
          </div>
        )}
      </div>

      {selectedSpecies && <SpeciesCard species={selectedSpecies} phylumNum={selectedPhylumNum} className={selectedClassName} onClose={()=>setSelectedSpecies(null)}/>}
    </div>
  );
}
