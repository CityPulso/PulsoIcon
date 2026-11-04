import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googlesearchconsole" (CC0-1.0). Google Search Console is a trademark of its owner.

export const BrandGoogleSearchConsole = createIcon("BrandGoogleSearchConsole", "brand-google-search-console", {
  nodes: [
    ["rect", { x: "3", y: "6", width: "18", height: "15", rx: "2" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M9 6V3.5h6V6" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M3 10h18" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6.5 8h.01M9 8h.01" }, { r: "pop", d: 0.1, o: [7.75, 8] }],
    ["path", { d: "M9.5 12.5v1.5a2.5 2.5 0 0 0 5 0v-1.5M12 16.5V18.5" }, { r: "turn", a: 25, d: 0.15, o: [12, 16.5] }],
  ],
});
