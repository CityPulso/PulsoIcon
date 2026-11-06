import { icon } from "../icon.js";

export const BuildingCapitol = icon("BuildingCapitol", "building-capitol", {
  nodes: [
    ["path", { d: "M12 2v3" }, { r: "swing", d: 0.3, o: [12, 5] }],
    ["path", { d: "M7 10a5 5 0 0 1 10 0" }, { r: "rise", a: 2, o: [12, 10] }],
    ["rect", { width: "16", height: "3", x: "4", y: "10", rx: "1" }, { r: "fade", o: [12, 11.5] }],
    ["path", { d: "M7 13v5" }, { r: "grow", d: 0.05, o: [7, 18] }],
    ["path", { d: "M12 13v5" }, { r: "grow", d: 0.1, o: [12, 18] }],
    ["path", { d: "M17 13v5" }, { r: "grow", d: 0.15, o: [17, 18] }],
    ["path", { d: "M3 21h18" }, { r: "growX", d: 0.2, o: [12, 21] }],
  ],
});
