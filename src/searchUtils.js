import { ATLAS_DATA } from './atlasData';

/**
 * A simplified search that looks through Phyla, Classes, and Species names.
 * This removes the dependency on missing metaTags.
 */
export function queryAtlas(query) {
  if (!query || query.length < 2) return [];
  
  const results = [];
  const q = query.toLowerCase();

  ATLAS_DATA.phyla.forEach(phylum => {
    const groups = phylum.classes || phylum.families || [];
    
    groups.forEach(group => {
      // Handle both standard species and Phylum 12 subfamilies
      const speciesList = group.subfamilies 
        ? group.subfamilies.flatMap(sub => sub.species) 
        : group.species;

      speciesList.forEach(item => {
        const name = Array.isArray(item) ? item[0] : item;
        
        // Match logic: Check if the species name or category name contains the query
        if (name.toLowerCase().includes(q) || group.name.toLowerCase().includes(q)) {
          results.push({
            species: item,
            phylumNum: phylum.number,
            phylumEmoji: phylum.emoji,
            className: group.name,
            matchType: "name"
          });
        }
      });
    });
  });

  // Return the first 100 matches to keep the UI fast
  return results.slice(0, 100);
}
