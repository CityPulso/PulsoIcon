import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googletranslate" (CC0-1.0). Google Translate is a trademark of its owner.

export const BrandGoogleTranslate = createIcon("BrandGoogleTranslate", "brand-google-translate", {
  nodes: [
    ["path", { d: "M14 7.5h6.5A1.5 1.5 0 0 1 22 9v10.5a1.5 1.5 0 0 1-1.5 1.5H12l1.5-5" }, { r: "slide", x: 1, y: 1, a: 0.8 }],
    ["rect", { x: "2", y: "3", width: "12", height: "13", rx: "1.5" }, { r: "slide", x: -1, y: -1, a: 0.8 }],
    ["path", { d: "M10.1 7.4A3 3 0 1 0 11 9.5h-3" }, { r: "redraw", d: 0.1, o: [8, 9.5] }],
    ["path", { d: "M16 12h4.5M18.25 11v1M16.75 12.25c.5 2.5 2 4.3 3.75 5M19.75 12.25c-.5 2.5-2 4.3-3.75 5" }, { r: "pop", d: 0.2, o: [18.25, 14.5] }],
  ],
});
