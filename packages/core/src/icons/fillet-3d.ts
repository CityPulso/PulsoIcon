import { icon } from "../icon.js";

export const Fillet3d = icon("Fillet3d", "fillet-3d", {
  nodes: [
    ["path", { d: "M4 21V13a9 9 0 0 1 9-9h8" }, { r: "redraw", o: [12, 12] }],
    ["path", { d: "M4 8.5h.01" }, { r: "fade", d: 0, o: [4, 4] }],
    ["path", { d: "M4 4h.01" }, { r: "fade", d: 0.05, o: [4, 4] }],
    ["path", { d: "M8.5 4h.01" }, { r: "fade", d: 0.1, o: [4, 4] }],
  ],
});
