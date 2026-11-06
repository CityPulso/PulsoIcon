import { icon } from "../icon.js";

export const ArrowUpFromDot = icon("ArrowUpFromDot", "arrow-up-from-dot", {
  nodes: [
    ["path", { d: "m5 9 7-7 7 7" }, { r: "shoot", y: -1, a: 5, o: [12, 9] }],
    ["path", { d: "M12 16V2" }, { r: "shoot", y: -1, a: 5, o: [12, 9] }],
    ["circle", { cx: "12", cy: "21", r: "1" }, { r: "pop", d: 0.3, o: [12, 21] }],
  ],
});
