import { icon } from "../icon.js";

export const ClockPlus = icon("ClockPlus", "clock-plus", {
  nodes: [
    ["path", { d: "M12 6v6l3.644 1.822" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 90, o: [19, 19] }],
    ["path", { d: "M21.92 13.267a10 10 0 1 0-8.653 8.653" }, { r: "press", a: 0.04, o: [12.001, 12.001] }],
  ],
});
