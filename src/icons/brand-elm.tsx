import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "elm" (CC0-1.0). Elm is a trademark of its owner.
export const BrandElm = createIcon("BrandElm", "brand-elm", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "1.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 3l9 9-9 9" }, { r: "draw" }],
    ["path", { d: "M12 12l4.5-4.5L21 12l-4.5 4.5z" }, { r: "twinkle", d: 0.15, a: 12, o: [16.5, 12] }],
    ["path", { d: "M7.5 7.5h9" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 21l4.5-4.5" }, { r: "draw", d: 0.3 }],
  ],
});
