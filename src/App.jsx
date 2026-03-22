import { useState, useMemo, useCallback, useEffect } from "react";
import { ATLAS_DATA, axisDefinitions } from "./atlasData.js";
import { NOTES } from "./notes.js";
import { SPECIES_ENTRIES } from "./speciesEntries.js";
import { queryAtlas } from "./searchUtils.js";

const ACCENT = "#B8896A";
const INK    = "#1A1514";
const IVORY  = "#F9F6F1";
const MUTED  = "#9A8F87";
const SOFT   = "#EDE8E0";
const RULE   = "#E5DDD4";
const PAPER  = "#FDFCF7";
const RED    = "#B83232";

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

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap');
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;padding:0;-webkit-font-smoothing:antialiased;background:#F9F6F1;color:#1A1514;overflow-x:hidden;font-family:'EB Garamond',Georgia,serif}
  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-track{background:#F9F6F1}
  ::-webkit-scrollbar-thumb{background:#D1C7BD;border-radius:10px}
  ::-webkit-scrollbar-thumb:hover{background:#B8896A}
  ::selection{background:rgba(184,137,106,0.22)}
  @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes scaleIn{from{opacity:0;transform:scale(0.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
  @keyframes glitch-flicker{0%{opacity:1;transform:translate(0)}10%{opacity:0.8;transform:translate(-1px,1px);text-shadow:1px 0 #00ffff,-1px 0 #ff00ff}20%{opacity:1;transform:translate(0)}100%{opacity:1;transform:translate(0)}}
  .phylum-card{opacity:0;animation:fadeUp 0.5s ease forwards}
  .incubator-glitch:hover{animation:glitch-flicker 0.4s infinite;border-color:#00ffff !important;box-shadow:0 0 20px rgba(0,255,255,0.15) !important}
  .species-modal-wrap{animation:fadeIn 0.2s ease forwards}
  .species-modal{animation:scaleIn 0.28s cubic-bezier(0.34,1.4,0.64,1) forwards}
`;

function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />;
}

const getNote  = (num, name) => NOTES?.[`${num}|${name}`] || null;
const getEntry = (name) => SPECIES_ENTRIES?.[name] || null;
const phylumOf = (num) => ATLAS_DATA?.phyla?.find(p => p.number === num);
const isSens   = (f) => f?.toLowerCase().includes("s") || false;
const isCross  = (f) => f?.toLowerCase().includes("x") || false;
const normalizeSpecies = (s) => Array.isArray(s) ? s : [s ?? "Unknown", ""];

function hl(text, q) {
  if (!q || !text) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return <>{text.slice(0,i)}<mark style={{background:"rgba(184,137,106,0.25)",borderRadius:2,color:"inherit",padding:"0 1px"}}>{text.slice(i,i+q.length)}</mark>{text.slice(i+q.length)}</>;
}

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let fId;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1-p,4)) * target));
      if (p < 1) fId = requestAnimationFrame(step);
      else setCount(target);
    };
    const id = setTimeout(() => { fId = requestAnimationFrame(step); }, 400);
    return () => { clearTimeout(id); if (fId) cancelAnimationFrame(fId); };
  }, [target, duration]);
  return count;
}

const AXIS_META = {
  metabolic:   { color:"#FF7070", icon:"◈" },
  durational:  { color:"#5FFF8B", icon:"⏳" },
  visibility:  { color:"#6AABFF", icon:"👁" },
  maintenance: { color:"#D4AF37", icon:"⚒" },
  interaction: { color:"#B08AFF", icon:"📡" },
  sovereignty: { color:"#AAAAAA", icon:"⚖" },
};

function AxisBadge({ axis, value }) {
  const s = AXIS_META[axis];
  if (!s || !value) return null;
  return (
    <span style={{fontSize:"0.52rem",padding:"3px 9px",borderRadius:"20px",border:`1px solid ${s.color}44`,color:s.color,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:`${s.color}0D`,fontFamily:"'Space Mono',monospace"}}>
      {s.icon} {value}
    </span>
  );
}

function SpeciesPill({ name, flag, colors, onClick }) {
  const [h, setH] = useState(false);
  const sens = isSens(flag), cross = isCross(flag);
  return (
    <button onClick={onClick} onMouseOver={()=>setH(true)} onMouseOut={()=>setH(false)}
      style={{padding:"0.42rem 1rem",borderRadius:"22px",border:`1px solid ${h?colors.accent:RULE}`,background:h?`${colors.accent}14`:IVORY,fontSize:"0.84rem",cursor:"pointer",fontStyle:"italic",color:INK,fontFamily:"'EB Garamond',serif",boxShadow:h?`0 3px 12px ${colors.accent}22`:"none",transition:"all 0.18s ease",transform:h?"translateY(-1px)":"none"}}>
      {name}
      {sens  && <span style={{marginLeft:"0.3rem",fontSize:"0.7rem",opacity:0.7}}>⚠</span>}
      {cross && <span style={{marginLeft:"0.3rem",fontSize:"0.65rem",color:colors.accent}}>◈</span>}
    </button>
  );
}

function SpeciesCard({ species, phylumNum, className, onClose }) {
  const [name, flag] = normalizeSpecies(species);
  const entry = getEntry(name);
  const colors = PHYLUM_COLORS[phylumNum] ?? { bg:"#1A1A1A", accent:ACCENT };
  const phylumName = phylumOf(phylumNum)?.name ?? "Unknown Phylum";
  const sensitive = isSens(flag), crossover = isCross(flag);
  const metadata = entry?.metadata;
  const isIncubator = className?.includes("INCUBATOR");

  return (
    <div className="species-modal-wrap" onClick={onClose}
      style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(15,12,10,0.75)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",backdropFilter:"blur(6px)"}}>
      <div className="species-modal" onClick={e=>e.stopPropagation()}
        style={{background:IVORY,borderRadius:"20px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 48px 140px rgba(0,0,0,0.55)"}}>

        <div style={{background:`linear-gradient(145deg,${colors.bg} 0%,${colors.bg}CC 100%)`,borderRadius:"20px 20px 0 0",padding:"1.6rem 1.8rem 1.3rem",position:"sticky",top:0,zIndex:10,borderBottom:`1px solid ${colors.accent}33`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:"0.55rem",color:colors.accent,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:"0.5rem",opacity:0.85,fontFamily:"'Space Mono',monospace"}}>
                {phylumName} › {className ?? "Unclassified"}
              </div>
              <h2 style={{fontSize:"clamp(1.4rem,4vw,1.9rem)",color:"#FFF",margin:0,lineHeight:1.15,fontStyle:"italic",fontFamily:"'Cormorant Garamond',serif",fontWeight:400}}>
                {name}{sensitive && <span style={{marginLeft:"0.5rem",fontSize:"0.9rem"}}>⚠</span>}
              </h2>
              <div style={{display:"flex",gap:"0.5rem",marginTop:"0.7rem",flexWrap:"wrap"}}>
                {crossover && <span style={{fontSize:"0.5rem",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"3px 8px",borderRadius:"4px",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'Space Mono',monospace"}}>◈ Crossover</span>}
                {isIncubator && <span style={{fontSize:"0.5rem",background:"rgba(0,229,255,0.15)",color:"#00E5FF",padding:"3px 8px",borderRadius:"4px",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'Space Mono',monospace"}}>⚗ Incubator</span>}
              </div>
            </div>
            <button onClick={onClose}
              style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.18)",borderRadius:"50%",width:36,height:36,cursor:"pointer",color:"#fff",fontSize:"1.1rem",flexShrink:0,marginLeft:"1rem",display:"flex",alignItems:"center",justifyContent:"center"}}
              onMouseOver={e=>{e.currentTarget.style.background="rgba(255,255,255,0.22)"}}
              onMouseOut={e=>{e.currentTarget.style.background="rgba(255,255,255,0.1)"}}>×</button>
          </div>
        </div>

        <div style={{padding:"1.6rem 1.8rem 2rem",display:"flex",flexDirection:"column",gap:"1.3rem"}}>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:"0.58rem",color:MUTED,borderBottom:`1px solid ${RULE}`,paddingBottom:"8px",letterSpacing:"0.12em",fontFamily:"'Space Mono',monospace"}}>
            <span>NO. {phylumNum}.{name.substring(0,3).toUpperCase()}-{name.length}</span>
            <span>STATUS: {sensitive?"RESTRICTED ⚠":isIncubator?"PROVISIONAL":"OPEN ACCESS"}</span>
          </div>

          {metadata?.realityState && (
            <div style={{fontSize:"0.7rem",color:colors.accent,borderLeft:`3px solid ${colors.accent}`,padding:"4px 0 4px 14px",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:600,fontFamily:"'Space Mono',monospace"}}>
              ⬡ {axisDefinitions?.coreLogic?.[metadata.realityState] || "Reality Unindexed"}
            </div>
          )}

          {metadata && (
            <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
              {Object.keys(AXIS_META).map(axis => <AxisBadge key={axis} axis={axis} value={metadata[axis]} />)}
            </div>
          )}

          {entry ? (
            <>
              {entry.summary && <p style={{fontSize:"1.12rem",color:INK,lineHeight:1.8,margin:0,fontStyle:"italic",fontFamily:"'Cormorant Garamond',serif"}}>{entry.summary}</p>}
              {(entry.era || entry.mood) && (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
                  {[["Chronological Era",entry.era],["Atmospheric Mood",entry.mood]].map(([l,v])=>v?(
                    <div key={l} style={{background:PAPER,borderRadius:"10px",padding:"0.7rem 0.9rem",border:`1px solid ${RULE}`}}>
                      <div style={{fontSize:"0.54rem",color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.25rem",fontFamily:"'Space Mono',monospace"}}>{l}</div>
                      <div style={{fontSize:"0.88rem"}}>{v}</div>
                    </div>
                  ):null)}
                </div>
              )}
              {entry.visual && (
                <div style={{background:PAPER,border:`1px solid ${RULE}`,borderRadius:"6px",padding:"1.3rem 1.4rem",position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",inset:0,backgroundImage:`repeating-linear-gradient(transparent,transparent 27px,${RULE}88 27px,${RULE}88 28px)`,opacity:0.4,pointerEvents:"none"}}/>
                  <div style={{fontSize:"0.54rem",color:colors.accent,textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:"0.9rem",fontWeight:700,position:"relative",fontFamily:"'Space Mono',monospace"}}>Field Observations</div>
                  <p style={{fontSize:"0.93rem",color:"#2C3020",margin:0,lineHeight:"28px",position:"relative",fontStyle:"italic"}}>{entry.visual}</p>
                </div>
              )}
              {entry.colors?.length > 0 && (
                <div style={{background:SOFT,borderRadius:"10px",padding:"0.85rem 1rem",border:`1px solid ${RULE}`}}>
                  <div style={{fontSize:"0.54rem",color:MUTED,textTransform:"uppercase",marginBottom:"0.7rem",letterSpacing:"0.08em",fontFamily:"'Space Mono',monospace"}}>Specimen Palette</div>
                  <div style={{display:"flex",gap:"0.6rem",flexWrap:"wrap"}}>
                    {entry.colors.map((c,i)=>(
                      <span key={i} style={{fontSize:"0.78rem",display:"flex",alignItems:"center",gap:"6px"}}>
                        <span style={{width:14,height:14,borderRadius:"50%",background:c.match(/#[0-9A-Fa-f]{6}/)?.[0]||MUTED,border:"1px solid rgba(0,0,0,0.12)",display:"inline-block"}}/>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {entry.garments?.length > 0 && (
                <div>
                  <div style={{fontSize:"0.54rem",color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.6rem",fontFamily:"'Space Mono',monospace"}}>Key Garments</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>
                    {entry.garments.map((g,i)=><span key={i} style={{fontSize:"0.8rem",padding:"3px 10px",background:SOFT,borderRadius:"20px",border:`1px solid ${RULE}`}}>{g}</span>)}
                  </div>
                </div>
              )}
              {entry.context && <div style={{fontSize:"0.9rem",color:MUTED,lineHeight:1.75}}>{entry.context}</div>}
              {entry.media?.length > 0 && (
                <div style={{borderTop:`1px solid ${RULE}`,paddingTop:"1rem"}}>
                  <div style={{fontSize:"0.54rem",color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.6rem",fontFamily:"'Space Mono',monospace"}}>Media Touchstones</div>
                  {entry.media.map((m,i)=><div key={i} style={{fontSize:"0.85rem",padding:"4px 0",borderLeft:`2px solid ${RULE}`,paddingLeft:"10px",marginBottom:"4px",fontStyle:"italic"}}>{m}</div>)}
                </div>
              )}
              {entry.see_also?.length > 0 && (
                <div>
                  <div style={{fontSize:"0.54rem",color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.6rem",fontFamily:"'Space Mono',monospace"}}>See Also</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>
                    {entry.see_also.map((s,i)=><span key={i} style={{fontSize:"0.8rem",padding:"3px 10px",background:SOFT,borderRadius:"20px",border:`1px solid ${colors.accent}44`,color:colors.accent}}>{s}</span>)}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={{textAlign:"center",padding:"2.5rem 0",color:MUTED}}>
              <div style={{fontSize:"2.5rem",marginBottom:"0.8rem",opacity:0.3}}>◉</div>
              <p style={{fontStyle:"italic",margin:0,fontSize:"0.95rem"}}>Field guide entry is currently being compiled.</p>
            </div>
          )}
          {getNote(phylumNum,name) && (
            <div style={{background:`${colors.accent}12`,border:`1px solid ${colors.accent}33`,borderRadius:"8px",padding:"0.9rem 1.1rem"}}>
              <div style={{fontSize:"0.54rem",color:colors.accent,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"0.4rem",fontFamily:"'Space Mono',monospace"}}>Field Note</div>
              <p style={{margin:0,fontSize:"0.88rem",fontStyle:"italic",color:INK}}>{getNote(phylumNum,name)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PhylumView({ phylum, onSpeciesClick }) {
  const [open, setOpen] = useState({});
  const colors = PHYLUM_COLORS[phylum.number];
  const groups = phylum.classes || phylum.families || [];
  const toggle = useCallback((idx) => setOpen(p=>({...p,[idx]:!p[idx]})),[]);

  return (
    <div style={{display:"flex",flexDirection:"column",gap:"0.7rem"}}>
      {groups.map((g, idx) => {
        const hasSubs = !!g.subfamilies;
        const list = hasSubs ? g.subfamilies.flatMap(s=>s.species||[]) : (g.species||[]);
        if (list.length === 0) return null;
        const expanded = !!open[idx];
        const isExp = g.isExperimental || g.name?.includes("INCUBATOR");
        return (
          <div key={g.name||idx}>
            <div onClick={()=>toggle(idx)} className={isExp?"incubator-glitch":""}
              style={{background:isExp?"linear-gradient(90deg,#0D0D0D,#001A24)":INK,color:"#fff",padding:"1rem 1.3rem",borderRadius:expanded?"12px 12px 0 0":"12px",borderLeft:`4px solid ${isExp?"#00E5FF":colors.accent}`,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:expanded?"none":"0 2px 10px rgba(0,0,0,0.12)",userSelect:"none",transition:"all 0.15s"}}>
              <span style={{fontWeight:600,textTransform:"uppercase",fontSize:"0.82rem",letterSpacing:"0.1em",fontFamily:"'Space Mono',monospace"}}>
                {isExp && "⚗ "}{g.name}
              </span>
              <div style={{display:"flex",alignItems:"center",gap:"0.8rem"}}>
                <span style={{fontSize:"0.65rem",color:isExp?"#00E5FF88":"#66666688",fontStyle:"italic",fontFamily:"'Space Mono',monospace"}}>
                  {isExp?"PROVISIONAL":`${list.length} sp`}
                </span>
                <span style={{fontSize:"0.7rem",color:isExp?"#00E5FF":colors.accent,transition:"transform 0.2s",display:"inline-block",transform:expanded?"rotate(180deg)":"none"}}>▾</span>
              </div>
            </div>
            {expanded && (
              <div style={{padding:"1.4rem 1.5rem",background:SOFT,borderRadius:"0 0 12px 12px",border:`1px solid ${RULE}`,borderTop:"none"}}>
                {hasSubs ? (
                  <div style={{display:"flex",flexDirection:"column",gap:"1.4rem"}}>
                    {g.subfamilies.map(sub => sub.species?.length > 0 && (
                      <div key={sub.name}>
                        <div style={{fontSize:"0.58rem",color:colors.accent,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.16em",marginBottom:"0.8rem",display:"flex",alignItems:"center",gap:"10px",fontFamily:"'Space Mono',monospace"}}>
                          <div style={{height:1,flex:1,background:RULE}}/>{sub.name}<div style={{height:1,flex:1,background:RULE}}/>
                        </div>
                        <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
                          {sub.species.map(item=>{const[n,f]=normalizeSpecies(item);return <SpeciesPill key={n} name={n} flag={f} colors={colors} onClick={()=>onSpeciesClick(item,phylum.number,g.name)}/>;} )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
                    {list.map(item=>{const[n,f]=normalizeSpecies(item);return <SpeciesPill key={n} name={n} flag={f} colors={colors} onClick={()=>onSpeciesClick(item,phylum.number,g.name)}/>;} )}
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
    <div style={{textAlign:"center",padding:"6rem 2rem",color:MUTED}}>
      <div style={{fontSize:"3rem",marginBottom:"1rem",opacity:0.2}}>◉</div>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"1.25rem"}}>
        Search all {ATLAS_DATA.total?.toLocaleString()} species, families, and field entries…
      </div>
    </div>
  );
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"0.45rem"}}>
      <div style={{marginBottom:"1rem",color:MUTED,fontSize:"0.8rem",fontFamily:"'Space Mono',monospace",letterSpacing:"0.05em"}}>
        {results.length} results for <em style={{color:ACCENT}}>"{query}"</em>
      </div>
      {results.map(res=>{
        const[name]=normalizeSpecies(res.species);
        const c=PHYLUM_COLORS[res.phylumNum]||{bg:SOFT,accent:MUTED};
        return (
          <button key={`${res.phylumNum}-${name}`} onClick={()=>onSpeciesClick(res.species,res.phylumNum,res.className)}
            style={{padding:"0.85rem 1.1rem",textAlign:"left",background:IVORY,border:`1px solid ${RULE}`,borderLeft:`3px solid ${c.accent}`,borderRadius:"10px",display:"flex",alignItems:"center",gap:"0.9rem",cursor:"pointer",transition:"all 0.15s"}}
            onMouseOver={e=>{e.currentTarget.style.background=SOFT;e.currentTarget.style.transform="translateX(3px)"}}
            onMouseOut={e=>{e.currentTarget.style.background=IVORY;e.currentTarget.style.transform="none"}}>
            <span style={{background:c.bg,color:c.accent,padding:"2px 8px",borderRadius:"8px",fontSize:"0.58rem",whiteSpace:"nowrap",fontFamily:"'Space Mono',monospace"}}>{res.phylumEmoji} P{res.phylumNum}</span>
            <span style={{fontStyle:"italic",flex:1,fontSize:"0.95rem"}}>{hl(name,query)}</span>
            <span style={{fontSize:"0.65rem",color:MUTED,textAlign:"right",fontFamily:"'Space Mono',monospace"}}>{res.className}</span>
          </button>
        );
      })}
    </div>
  );
}

function StatsView() {
  const stats = useMemo(()=>{
    let sensitive=0,crossover=0,withEntries=0,totalGroups=0;
    ATLAS_DATA.phyla.forEach(p=>{
      const gs=p.classes||p.families||[];
      totalGroups+=gs.length;
      gs.forEach(g=>{
        const list=g.subfamilies?g.subfamilies.flatMap(s=>s.species||[]):(g.species||[]);
        list.forEach(s=>{const[nm,fl]=normalizeSpecies(s);if(isSens(fl))sensitive++;if(isCross(fl))crossover++;if(getEntry(nm))withEntries++;});
      });
    });
    return{sensitive,crossover,withEntries,totalGroups};
  },[]);
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:"0.85rem",marginBottom:"3rem"}}>
        {[[ATLAS_DATA.total?.toLocaleString(),"Total Species",ACCENT],[12,"Phyla","#7B68EE"],[stats.totalGroups,"Classes / Families","#52B788"],[stats.sensitive,"Sensitive",RED],[stats.crossover,"Crossover","#9090D0"],[stats.withEntries,"Full Entries","#C4A35A"]].map(([v,l,c])=>(
          <div key={l} style={{background:IVORY,border:`1px solid ${RULE}`,borderTop:`3px solid ${c}`,borderRadius:"12px",padding:"1.2rem 1rem"}}>
            <div style={{fontSize:"2rem",fontWeight:500,color:c,fontFamily:"'Cormorant Garamond',serif"}}>{v}</div>
            <div style={{fontSize:"0.6rem",color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginTop:"0.2rem",fontFamily:"'Space Mono',monospace"}}>{l}</div>
          </div>
        ))}
      </div>
      <h3 style={{borderBottom:`1px solid ${RULE}`,paddingBottom:"0.5rem",fontFamily:"'Cormorant Garamond',serif",fontWeight:400,fontSize:"1.5rem",marginBottom:"1.5rem"}}>Distribution by Phylum</h3>
      {ATLAS_DATA.phyla.map(p=>{
        const pct=((p.count/ATLAS_DATA.total)*100).toFixed(1);
        const c=PHYLUM_COLORS[p.number].accent;
        return(
          <div key={p.number} style={{marginBottom:"1rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"0.88rem",marginBottom:"5px"}}>
              <span>{p.emoji} {p.name}</span>
              <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:MUTED}}>{p.count} ({pct}%)</span>
            </div>
            <div style={{height:5,background:SOFT,borderRadius:3,overflow:"hidden"}}>
              <div style={{height:"100%",background:c,width:`${pct}%`,borderRadius:3}}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PhylumCard({ phylum, colors, idx, onClick }) {
  const [h, setH] = useState(false);
  const pct = ((phylum.count / ATLAS_DATA.total) * 100).toFixed(1);
  return (
    <button className="phylum-card" onClick={onClick}
      onMouseOver={()=>setH(true)} onMouseOut={()=>setH(false)}
      style={{background:h?SOFT:IVORY,border:`1px solid ${h?colors.accent+"66":RULE}`,borderLeft:`4px solid ${colors.accent}`,borderRadius:"14px",padding:"1.6rem 1.4rem",textAlign:"left",cursor:"pointer",animationDelay:`${idx*0.04}s`,boxShadow:h?`0 8px 28px ${colors.accent}20,0 2px 8px rgba(0,0,0,0.06)`:"0 1px 4px rgba(0,0,0,0.05)",transform:h?"translateY(-3px)":"none",transition:"all 0.22s cubic-bezier(0.25,0.46,0.45,0.94)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-0.2rem",top:"-0.5rem",fontSize:"5rem",fontWeight:700,color:`${colors.accent}0C`,fontFamily:"'Cormorant Garamond',serif",lineHeight:1,pointerEvents:"none",userSelect:"none",opacity:h?1:0.6,transition:"opacity 0.2s"}}>{phylum.number}</div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.8rem"}}>
        <span style={{fontSize:"1.9rem",lineHeight:1}}>{phylum.emoji}</span>
        <span style={{fontSize:"0.58rem",color:MUTED,fontFamily:"'Space Mono',monospace",marginTop:"0.1rem"}}>{pct}%</span>
      </div>
      <div style={{fontSize:"0.55rem",color:colors.accent,letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:"0.3rem",fontFamily:"'Space Mono',monospace"}}>Phylum {phylum.number}</div>
      <div style={{fontWeight:600,fontSize:"1.15rem",color:INK,lineHeight:1.25,marginBottom:"0.9rem",fontFamily:"'EB Garamond',serif"}}>{phylum.name}</div>
      <div style={{height:3,background:RULE,borderRadius:2,overflow:"hidden"}}>
        <div style={{height:"100%",background:`linear-gradient(90deg,${colors.accent}99,${colors.accent})`,width:`${Math.min(parseFloat(pct)*3.5,100)}%`,borderRadius:2}}/>
      </div>
      <div style={{marginTop:"0.6rem",fontSize:"0.7rem",color:MUTED,fontFamily:"'Space Mono',monospace"}}>{phylum.count?.toLocaleString()} species</div>
    </button>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [activePhylum, setActivePhylum] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedPhylumNum, setSelectedPhylumNum] = useState(null);
  const [selectedClassName, setSelectedClassName] = useState("");

  const animatedCount = useCountUp(ATLAS_DATA.total || 0, 2000);
  const currentPhylum = activePhylum !== null ? ATLAS_DATA.phyla.find(p=>p.number===activePhylum) : null;

  const switchView = useCallback((v)=>{ setView(v); window.scrollTo({top:0,behavior:"instant"}); },[]);
  const handleSpeciesClick = useCallback((species, phylumNum, className)=>{ setSelectedSpecies(species); setSelectedPhylumNum(phylumNum); setSelectedClassName(className); },[]);
  const handleSearch = useCallback((val)=>{ setSearchQuery(val); if(val.length>1){ setSearchResults(queryAtlas(val,ATLAS_DATA)); switchView("search"); } else { switchView(activePhylum?"phylum":"home"); } },[activePhylum,switchView]);
  const goHome = useCallback(()=>{ setView("home"); setActivePhylum(null); setSearchQuery(""); setSelectedSpecies(null); window.scrollTo({top:0,behavior:"instant"}); },[]);

  return (
    <>
      <GlobalStyles />
      <div style={{background:IVORY,minHeight:"100vh"}}>

        {/* NAV */}
        <nav style={{background:INK,padding:"0 1.5rem",display:"flex",alignItems:"center",gap:"1rem",position:"sticky",top:0,zIndex:100,height:56,boxShadow:"0 1px 0 rgba(255,255,255,0.05)"}}>
          <button onClick={goHome} style={{background:"none",border:"none",cursor:"pointer",color:IVORY,fontSize:"1rem",fontFamily:"'EB Garamond',serif",whiteSpace:"nowrap",padding:0,flexShrink:0,letterSpacing:"0.01em"}}>
            Atlas&nbsp;of&nbsp;<span style={{color:ACCENT,fontStyle:"italic"}}>Aesthetics</span>
          </button>
          <div style={{flex:1,position:"relative"}}>
            <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"#555",fontSize:"0.8rem",pointerEvents:"none"}}>◉</span>
            <input placeholder={`Search ${ATLAS_DATA.total?.toLocaleString()} species…`} value={searchQuery} onChange={e=>handleSearch(e.target.value)}
              style={{width:"100%",padding:"0.45rem 1.1rem 0.45rem 2.2rem",borderRadius:"20px",border:"1px solid #333",background:"#222",color:"#fff",fontSize:"0.88rem",outline:"none",fontFamily:"'EB Garamond',serif",transition:"border-color 0.15s"}}
              onFocus={e=>{e.target.style.borderColor=ACCENT}} onBlur={e=>{e.target.style.borderColor="#333"}}/>
          </div>
          <button onClick={()=>switchView("stats")}
            style={{background:view==="stats"?ACCENT:"none",border:`1px solid ${view==="stats"?ACCENT:"#444"}`,borderRadius:"8px",cursor:"pointer",fontSize:"0.75rem",padding:"0.3rem 0.7rem",color:view==="stats"?INK:"#888",fontFamily:"'Space Mono',monospace",flexShrink:0}}>
            STATS
          </button>
        </nav>

        <div style={{maxWidth:"1040px",margin:"0 auto",padding:"2rem 1.5rem"}}>

          {view==="search" && <SearchView results={searchResults} query={searchQuery} onSpeciesClick={handleSpeciesClick}/>}

          {view==="stats" && (
            <>
              <button onClick={goHome} style={{color:ACCENT,background:"none",border:"none",cursor:"pointer",marginBottom:"1.5rem",fontFamily:"'EB Garamond',serif",fontSize:"0.95rem"}}>← Back to Atlas</button>
              <StatsView/>
            </>
          )}

          {view==="home" && (
            <>
              {/* Hero */}
              <div style={{textAlign:"center",padding:"5rem 1rem 4.5rem",borderBottom:`1px solid ${RULE}`,marginBottom:"3.5rem",position:"relative"}}>
                <div style={{position:"absolute",top:"3.5rem",left:"50%",transform:"translateX(-50%)",width:"40px",height:"1px",background:`linear-gradient(90deg,transparent,${ACCENT},transparent)`}}/>
                <div style={{fontSize:"0.62rem",color:ACCENT,letterSpacing:"0.32em",textTransform:"uppercase",marginBottom:"1.2rem",fontFamily:"'Space Mono',monospace"}}>
                  Kingdom · Fashion Aesthetic Culture · 2026 Edition
                </div>
                <h1 style={{fontSize:"clamp(2.6rem,7vw,5rem)",margin:"0 0 0.3rem",fontWeight:300,fontFamily:"'Cormorant Garamond',serif",lineHeight:1.08,letterSpacing:"-0.01em"}}>
                  Atlas of <em style={{fontStyle:"italic",color:ACCENT}}>Fashion Aesthetics</em>
                </h1>
                <div style={{fontSize:"clamp(3rem,10vw,6.5rem)",fontFamily:"'Cormorant Garamond',serif",fontWeight:300,color:ACCENT,lineHeight:1,margin:"0.8rem 0 0.4rem",letterSpacing:"-0.02em"}}>
                  {animatedCount.toLocaleString()}
                </div>
                <p style={{color:MUTED,fontStyle:"italic",fontSize:"1.05rem",margin:0,fontFamily:"'EB Garamond',serif"}}>
                  species documented across 12 phyla
                </p>
                <div style={{marginTop:"2.5rem",display:"flex",justifyContent:"center",gap:"2rem"}}>
                  {[["12","Phyla"],[ATLAS_DATA.phyla.reduce((t,p)=>t+(p.classes||p.families||[]).length,0),"Classes"],["2026","Edition"]].map(([v,l])=>(
                    <div key={l} style={{textAlign:"center"}}>
                      <div style={{fontSize:"1.5rem",fontFamily:"'Cormorant Garamond',serif",fontWeight:400,color:INK}}>{v}</div>
                      <div style={{fontSize:"0.58rem",color:MUTED,textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'Space Mono',monospace"}}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:"1.2rem"}}>
                {ATLAS_DATA.phyla.map((p,idx)=>(
                  <PhylumCard key={p.number} phylum={p} colors={PHYLUM_COLORS[p.number]} idx={idx}
                    onClick={()=>{ setActivePhylum(p.number); switchView("phylum"); }}/>
                ))}
              </div>
            </>
          )}

          {view==="phylum" && currentPhylum && (
            <div>
              {/* Phylum tabs */}
              <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",padding:"0.5rem 0 1.2rem",marginBottom:"1.5rem",borderBottom:`1px solid ${RULE}`,scrollbarWidth:"none"}}>
                {ATLAS_DATA.phyla.map(p=>{
                  const active=activePhylum===p.number;
                  const ac=PHYLUM_COLORS[p.number].accent;
                  return(
                    <button key={p.number} onClick={()=>setActivePhylum(p.number)}
                      style={{padding:"0.38rem 0.85rem",borderRadius:"20px",border:active?"none":`1px solid ${RULE}`,background:active?INK:IVORY,color:active?"#fff":INK,cursor:"pointer",whiteSpace:"nowrap",fontSize:"0.75rem",fontFamily:"'Space Mono',monospace",flexShrink:0,transition:"all 0.15s",borderLeft:active?`3px solid ${ac}`:undefined}}>
                      {p.emoji} P{p.number}
                    </button>
                  );
                })}
              </div>
              <button onClick={goHome} style={{color:ACCENT,background:"none",border:"none",cursor:"pointer",marginBottom:"1.2rem",fontSize:"0.88rem",fontFamily:"'EB Garamond',serif"}}>← Main Atlas</button>
              <div style={{marginBottom:"2.5rem"}}>
                <div style={{fontSize:"0.58rem",color:MUTED,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:"0.4rem",fontFamily:"'Space Mono',monospace"}}>Phylum {currentPhylum.number} of 12</div>
                <h2 style={{fontSize:"clamp(2rem,5vw,3.2rem)",margin:0,fontWeight:300,fontFamily:"'Cormorant Garamond',serif",lineHeight:1.1}}>
                  <span style={{fontSize:"2rem",marginRight:"0.5rem"}}>{currentPhylum.emoji}</span>{currentPhylum.name}
                </h2>
                {currentPhylum.description && <p style={{color:MUTED,fontStyle:"italic",margin:"0.7rem 0 0",fontSize:"1rem",lineHeight:1.7}}>{currentPhylum.description}</p>}
                <div style={{marginTop:"0.8rem",fontSize:"0.62rem",color:MUTED,fontFamily:"'Space Mono',monospace"}}>
                  {currentPhylum.count} species · {(currentPhylum.classes||currentPhylum.families||[]).length} classes
                </div>
              </div>
              <PhylumView phylum={currentPhylum} onSpeciesClick={handleSpeciesClick}/>
            </div>
          )}
        </div>

        {selectedSpecies && (
          <SpeciesCard species={selectedSpecies} phylumNum={selectedPhylumNum} className={selectedClassName} onClose={()=>setSelectedSpecies(null)}/>
        )}
      </div>
    </>
  );
}
