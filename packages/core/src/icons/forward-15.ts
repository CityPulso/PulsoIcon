import { icon } from "../icon.js";

export const Forward15 = icon("Forward15", "forward-15", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M21 3v5h-5" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M8 10l1.5-1v6" }, { r: "pop", d: 0.15, o: [8.75, 12] }],
    ["path", { d: "M16 9h-3v2.5h1.5a1.75 1.75 0 0 1 0 3.5H12.5" }, { r: "pop", d: 0.22, o: [14.25, 12] }],
  ],
});
