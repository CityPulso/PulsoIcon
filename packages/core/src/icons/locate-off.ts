import { icon } from "../icon.js";

export const LocateOff = icon("LocateOff", "locate-off", {
  nodes: [
    ["path", { d: "M12 19v3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 2v3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M18.89 13.24a7 7 0 0 0-8.13-8.13" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19 12h3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M2 12h3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M7.05 7.05a7 7 0 0 0 9.9 9.9" }, { r: "fade", o: [12, 12] }],
  ],
  solid: [
    ["line", { x1: "2", x2: "5", y1: "12", y2: "12", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["line", { x1: "19", x2: "22", y1: "12", y2: "12", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "5", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "7" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
