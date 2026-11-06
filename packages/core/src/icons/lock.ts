import { icon } from "../icon.js";

export const Lock = icon("Lock", "lock", {
  nodes: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }, { r: "shake", d: 0.1, a: 0.8, o: [12, 16.5] }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }, { r: "lift", o: [12, 6.5] }],
  ],
});
