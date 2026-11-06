import { icon } from "../icon.js";

export const Beaker = icon("Beaker", "beaker", {
  svg: { r: "sway", a: 6, o: [12, 21] },
  nodes: [
    ["path", { d: "M4.5 3h15" }],
    ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }],
    ["path", { d: "M6 14h12" }, { r: "redraw", d: 0.15, o: [12, 14] }],
  ],
});
