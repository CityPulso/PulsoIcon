import { icon } from "../icon.js";

export const ClockArrowUp = icon("ClockArrowUp", "clock-arrow-up", {
  nodes: [
    ["path", { d: "M12 6v6l1.56.78" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M13.227 21.925a10 10 0 1 1 8.767-9.588" }, { r: "press", a: 0.04, o: [12, 12.001] }],
    ["path", { d: "m14 18 4-4 4 4" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [18, 18] }],
    ["path", { d: "M18 22v-8" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [18, 18] }],
  ],
});
