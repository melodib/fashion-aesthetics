export function queryAtlas(query, atlasData) { 
  if (!query || query.length < 2) return [];
  
  const results = [];
  const q = query.toLowerCase();

  // This now uses the 'atlasData' you pass in from App.jsx
  if (!atlasData?.phyla) return [];

  atlasData.phyla.forEach(phylum => {
    const groups = phylum?.classes || phylum?.families || [];
    
    groups.forEach(group => {
      const speciesList = group.subfamilies 
        ? group.subfamilies.flatMap(sub => sub.species || []) 
        : (group.species || []);

      const groupName = group.name || "";

      speciesList.forEach(item => {
        if (!item) return;

        const name = Array.isArray(item) ? item[0] : item;
        if (!name) return;
        
        if (
          name.toLowerCase().includes(q) || 
          groupName.toLowerCase().includes(q)
        ) {
          results.push({
            species: item,
            phylumNum: phylum?.number,
            phylumEmoji: phylum?.emoji,
            className: groupName,
            matchType: "name"
          });
        }
      });
    });
  });

  return results.slice(0, 100);
}
