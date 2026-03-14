import { useState, useMemo } from "react";

// 1. Fixed the missing variables causing the crash
const ACCENT = "#6366f1"; 
const PHYLUM_COLORS = {
  1: "#6366f1", // Historical
  2: "#ec4899", // Subcultural
  3: "#10b981", // Cultural
  4: "#f59e0b", // Gender
  5: "#8b5cf6" 
};

// 2. Your Fashion Data (I've closed the brackets properly here)
const ATLAS_DATA = {
  "total": 2978,
  "phyla": [
    {
      "number": 1,
      "name": "Historical",
      "emoji": "🏛",
      "description": "Chronological eras — from pharaohs to Y2K",
      "classes": [
        {
          "name": "ANCIENT & CLASSICAL",
          "species": [
            ["Mesopotamian Aesthetic","N",""], ["Ancient Indus Aesthetic","N",""], ["Egyptian Priestess","N",""]
            // ... (The rest of your thousands of items go here)
          ]
        }
      ]
    }
  ]
};

// 3. The missing React Component to render the site
export default function App() {
  const [search, setSearch] = useState("");

  // Search logic to handle the 2,978 items efficiently
  const filteredPhyla = useMemo(() => {
    return ATLAS_DATA.phyla.map(phylum => ({
      ...phylum,
      classes: phylum.classes.map(cls => ({
        ...cls,
        species: cls.species.filter(s => 
          s[0].toLowerCase().includes(search.toLowerCase())
        )
      })).filter(cls => cls.species.length > 0)
    })).filter(phylum => phylum.classes.length > 0);
  }, [search]);

  return (
    <div style={{ padding: '20px', fontFamily: 'serif', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', borderBottom: `2px solid ${ACCENT}`, marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>THE FASHION ATLAS</h1>
        <p>A Taxonomic Compendium of {ATLAS_DATA.total} Aesthetics</p>
        <input 
          type="text" 
          placeholder="Search species (e.g. 'Goth', 'Victorian')..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '10px', width: '80%', maxWidth: '400px', marginBottom: '20px', borderRadius: '20px', border: '1px solid #ccc' }}
        />
      </header>

      <main>
        {filteredPhyla.map(phylum => (
          <section key={phylum.number} style={{ marginBottom: '40px' }}>
            <h2 style={{ color: PHYLUM_COLORS[phylum.number], borderLeft: `5px solid ${PHYLUM_COLORS[phylum.number]}`, paddingLeft: '10px' }}>
              {phylum.emoji} Phylum {phylum.number}: {phylum.name}
            </h2>
            {phylum.classes.map((cls, idx) => (
              <div key={idx} style={{ marginLeft: '20px' }}>
                <h3>{cls.name}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {cls.species.map((s, sIdx) => (
                    <span key={sIdx} style={{ padding: '5px 10px', backgroundColor: '#eee', borderRadius: '5px', fontSize: '0.9rem' }}>
                      {s[0]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
