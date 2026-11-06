import { icon } from "../icon.js";

// Drawn after Phosphor Icons "three-d" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ThreeD = icon("ThreeD", "three-d", {
  nodes: [
    ["path", { d: "M4 4h16" }, { r: "growX", o: [12, 4] }],
    ["path", { d: "M4 20h16" }, { r: "growX", d: 0.05, o: [12, 20] }],
    ["path", { d: "M4 8h5l-2.5 3.5a2.5 2.5 0 1 1-2.17 3.75" }, { r: "draw", d: 0.1, o: [6.5, 12] }],
    ["path", { d: "M12 8v8h3.5a4 4 0 0 0 0-8Z" }, { r: "draw", d: 0.25, o: [15.5, 12] }],
  ],
});
