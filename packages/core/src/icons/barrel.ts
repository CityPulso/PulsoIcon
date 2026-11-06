import { icon } from "../icon.js";

export const Barrel = icon("Barrel", "barrel", {
  svg: { r: "roll", x: 1, a: 2 },
  nodes: [
    ["path", { d: "M10.5 2a34.5 34.5 0 000 20" }],
    ["path", { d: "M13.5 2a34.5 34.5 0 010 20" }],
    ["path", { d: "M4.67 17h14.67" }, { r: "growX", d: 0.2, o: [12.005, 17] }],
    ["path", { d: "M4.67 7h14.67" }, { r: "growX", d: 0.28, o: [12.005, 7] }],
    ["path", { d: "M6.23 3.06a19 19 0 000 17.88A2 2 0 008 22h8a2 2 0 001.77-1.06 19 19 0 000-17.88A2 2 0 0016 2H8a2 2 0 00-1.77 1.06" }],
  ],
});
