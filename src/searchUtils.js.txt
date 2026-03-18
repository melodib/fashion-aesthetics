import { aestheticMeta, metaTags } from './atlasData';

export function queryAtlas({ ideology, mood, visual }) {
  return Object.keys(aestheticMeta).filter(name => {
    const meta = aestheticMeta[name];
    const visuals = metaTags[name]?.visuals || [];

    const matchIdeology = !ideology || meta.ideology === ideology;
    const matchMood = !mood || meta.mood.includes(mood);
    const matchVisual = !visual || visuals.includes(visual);

    return matchIdeology && matchMood && matchVisual;
  });
}
