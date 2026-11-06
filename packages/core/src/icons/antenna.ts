import { icon } from "../icon.js";

export const Antenna = icon("Antenna", "antenna", {
  nodes: [
    ["path", { d: "M2 12 7 2" }, { r: "draw", o: [12, 7] }],
    ["path", { d: "m7 12 5-10" }, { r: "draw", d: 0.07, o: [12, 7] }],
    ["path", { d: "m12 12 5-10" }, { r: "draw", d: 0.14, o: [12, 7] }],
    ["path", { d: "m17 12 5-10" }, { r: "draw", d: 0.21, o: [12, 7] }],
    ["path", { d: "M4.5 7h15" }, { r: "growX", d: 0.25, o: [12, 7] }],
    ["path", { d: "M12 16v6" }, { r: "grow", o: [12, 22] }],
  ],
});
