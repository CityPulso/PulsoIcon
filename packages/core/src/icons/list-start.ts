import { icon } from "../icon.js";

export const ListStart = icon("ListStart", "list-start", {
  nodes: [
    ["path", { d: "M3 5h6" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M3 12h13" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M3 19h13" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "m16 8-3-3 3-3" }, { r: "redraw", d: 0.15, o: [17, 10.5] }],
    ["path", { d: "M21 19V7a2 2 0 0 0-2-2h-6" }, { r: "redraw", d: 0.15, o: [17, 10.5] }],
  ],
});
