import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "teamviewer" (CC0-1.0). TeamViewer is a trademark of its owner.
export const BrandTeamviewer = createIcon("BrandTeamviewer", "brand-teamviewer", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "6.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 12h8" }, { r: "drawOut", d: 0.1 }],
    ["path", { d: "m10 10-2 2 2 2" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 0.8 }],
    ["path", { d: "m14 10 2 2-2 2" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 0.8 }],
  ],
});
