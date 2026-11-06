import { icon } from "../icon.js";

// Drawn after Simple Icons "musicbrainz" (CC0-1.0). MusicBrainz is a trademark of its owner.
export const BrandMusicbrainz = icon("BrandMusicbrainz", "brand-musicbrainz", {
  nodes: [
    ["path", { d: "M12 2l8.5 5v10L12 22l-8.5-5V7z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 2v20" }],
    ["path", { d: "M8.5 15V8" }],
    ["circle", { cx: "7", cy: "15", r: "1.5" }, { r: "jelly", a: 0.15, o: [7.5, 15] }],
    ["path", { d: "M12 12l3.5-3.5M12 12l3.5 3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 7.5h.01M17 16.5h.01" }, { r: "pop", d: 0.3, o: [17, 12] }],
  ],
});
