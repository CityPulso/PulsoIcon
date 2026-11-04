import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tiddlywiki" (CC0-1.0). TiddlyWiki is a trademark of its owner.

export const BrandTiddlywiki = createIcon("BrandTiddlywiki", "brand-tiddlywiki", {
  nodes: [
    [
      "path",
      { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M8 17v-4a2 2 0 0 1 2-2h3.5l.5-3 1.5 1.5h1l1.5-1.5.5 3.5c0 1.5-.5 2.5-1.5 3V17M10 17v-2" }, { r: "bounce", d: 0.05, y: -1, a: 1 }],
    ["path", { d: "M8 13c-1.5 0-2-1-2-2.5" }, { r: "swing", d: 0.1, a: 20, o: [8, 13] }],
  ],
});
