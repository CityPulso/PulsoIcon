import { icon } from "../icon.js";

export const WateringCan = icon("WateringCan", "watering-can", {
  nodes: [
    ["path", { d: "M3 11a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, { r: "turn", a: 14, o: [9, 21] }],
    ["path", { d: "M9 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5" }, { r: "turn", a: 14, o: [9, 21] }],
    ["path", { d: "M14 15.5 19.5 8.5" }, { r: "turn", a: 14, o: [9, 21] }],
    ["path", { d: "m18 7.3 3 2.4" }, { r: "turn", a: 14, o: [9, 21] }],
    ["path", { d: "M21 13h.01M20 16h.01" }, { r: "drop", y: -1, a: 3, d: 0.3, o: [20.5, 14.5] }],
  ],
});
