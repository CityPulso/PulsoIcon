import { icon } from "../icon.js";

export const BasketballCourt = icon("BasketballCourt", "basketball-court", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 4v16" }, { r: "grow", d: 0.05, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pop", d: 0.15, o: [12, 12] }],
    ["path", { d: "M2 8h2a4 4 0 0 1 0 8H2" }, { r: "draw", d: 0.2, o: [4, 12] }],
    ["path", { d: "M22 8h-2a4 4 0 0 0 0 8h2" }, { r: "draw", d: 0.2, o: [20, 12] }],
  ],
});
