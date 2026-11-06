import { icon } from "../icon.js";

// Drawn after Phosphor Icons "globe-stand" (MIT, Copyright (c) 2023 Phosphor Icons).
export const GlobeStand = icon("GlobeStand", "globe-stand", {
  nodes: [
    ["circle", { cx: "13", cy: "9", r: "5.5" }, { r: "turn", a: -15, o: [13, 9] }],
    ["path", { d: "M7 3a8.5 8.5 0 0 0 12 12" }, { r: "turn", a: -15, o: [13, 9] }],
    ["path", { d: "M13 17.5V21" }, { r: "press", a: 0.1, o: [13, 21] }],
    ["path", { d: "M9 21h8" }, { r: "press", a: 0.1, o: [13, 21] }],
  ],
});
