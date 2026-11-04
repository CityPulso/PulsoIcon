import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pastebin" (CC0-1.0). Pastebin is a trademark of its owner.
export const BrandPastebin = createIcon("BrandPastebin", "brand-pastebin", {
  nodes: [
    ["path", { d: "M14 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" }],
    ["path", { d: "M20 15c-2.5 0-4 1.5-4 4 0 1 .5 1.5-2 2" }, { r: "fold", d: 0.1, o: [17, 18] }],
    ["path", { d: "M8 7v3M11.5 7v3M15 7.5h1M8 13h1M11.5 12.5v3" }, { r: "draw", d: 0.2, o: [12, 11] }],
  ],
});
