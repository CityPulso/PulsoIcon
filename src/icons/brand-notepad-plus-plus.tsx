import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "notepadplusplus" (CC0-1.0). Notepad++ is a trademark of its owner.
export const BrandNotepadPlusPlus = createIcon("BrandNotepadPlusPlus", "brand-notepad-plus-plus", {
  nodes: [
    ["path", { d: "M4 16a6 6 0 0 1 6-6h3.5" }, { r: "draw" }],
    ["circle", { cx: "17", cy: "8", r: "3.5" }, { r: "pop", d: 0.1, o: [17, 8] }],
    ["path", { d: "M17.5 8h.01" }, { r: "blink", d: 0.3, o: [17.5, 8] }],
    ["path", { d: "M2 19.5h16l3.5-1" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M7 16.5V19.5" }, { r: "draw", d: 0.25 }],
  ],
});
