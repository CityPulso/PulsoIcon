import { icon } from "../icon.js";

export const BrickWall = icon("BrickWall", "brick-wall", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 9v6" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M16 15v6" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M16 3v6" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 15h18" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "fade", d: 0.16, o: [12, 12] }],
    ["path", { d: "M8 15v6" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M8 3v6" }, { r: "fade", d: 0.24, o: [12, 12] }],
  ],
});
