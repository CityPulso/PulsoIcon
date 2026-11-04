import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googlekeep" (CC0-1.0). Google Keep is a trademark of its owner.

export const BrandGoogleKeep = createIcon("BrandGoogleKeep", "brand-google-keep", {
  nodes: [
    ["path", { d: "M14 2H6.5A1.5 1.5 0 0 0 5 3.5v17A1.5 1.5 0 0 0 6.5 22h11a1.5 1.5 0 0 0 1.5-1.5V7z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M10.25 15.5a3 3 0 1 1 3.5 0V16.5h-3.5z" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M10.5 19h3" }, { r: "growX", d: 0.15, o: [12, 19] }],
  ],
});
