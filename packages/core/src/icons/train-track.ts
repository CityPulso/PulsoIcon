import { icon } from "../icon.js";

export const TrainTrack = icon("TrainTrack", "train-track", {
  nodes: [
    ["path", { d: "M2 17 17 2" }, { r: "fade", o: [9.5, 9.5] }],
    ["path", { d: "m2 14 8 8" }, { r: "fade", d: 0.05, o: [12, 12] }],
    ["path", { d: "m5 11 8 8" }, { r: "fade", d: 0.09, o: [12, 12] }],
    ["path", { d: "m8 8 8 8" }, { r: "fade", d: 0.13, o: [12, 12] }],
    ["path", { d: "m11 5 8 8" }, { r: "fade", d: 0.17, o: [12, 12] }],
    ["path", { d: "m14 2 8 8" }, { r: "fade", d: 0.21, o: [12, 12] }],
    ["path", { d: "M7 22 22 7" }, { r: "slide", x: 1, y: 1, a: 1, o: [14.5, 14.5] }],
  ],
});
