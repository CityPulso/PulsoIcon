import { icon } from "../icon.js";

export const Desk = icon("Desk", "desk", {
  nodes: [
    ["path", { d: "M2 7h20" }, { r: "growX", o: [12, 7] }],
    ["path", { d: "M4 7v14" }, { r: "grow", d: 0.05, o: [4, 7] }],
    ["path", { d: "M14 7v14M20 7v14M14 12h6M14 17h6" }, { r: "grow", d: 0.05, o: [17, 7] }],
    ["path", { d: "M16.5 9.5h1M16.5 14.5h1" }, { r: "pop", d: 0.25, o: [17, 12] }],
  ],
});
