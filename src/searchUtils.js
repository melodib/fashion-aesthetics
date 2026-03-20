export function queryAtlas(query, ATLAS_DATA) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  const results = [];

  console.log("Searching for:", q); // This proves the function is running

  ATLAS_DATA.phyla.forEach(phylum => {
    // This looks at the entire Phylum (Classes, Families, Species, Metadata) as one big string
    const phylumString = JSON.stringify(phylum).toLowerCase();

    if (phylumString.includes(q)) {
      const groups = phylum.classes || phylum.families || [];
      
      groups.forEach(group => {
        const groupString = JSON.stringify(group).toLowerCase();

        // If the search term is in this specific group or its metadata
        if (groupString.includes(q)) {
          const speciesList = group.subfamilies 
            ? group.subfamilies.flatMap(sub => sub.species || []) 
            : (group.species || []);

          speciesList.forEach(item => {
            results.push({
              species: item,
              phylumNum: phylum.number,
              phylumEmoji: phylum.emoji,
              className: group.name,
              metadata: group.metadata // Forces the metadata into the result for the Modal
            });
          });
        }
      });
    }
  });

  console.log("Total results found:", results.length);
  return results.slice(0, 100);
}