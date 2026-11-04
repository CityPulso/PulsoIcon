import { createIcon } from "../runtime/createIcon.js";

export const DiscAi = createIcon("DiscAi", "disc-ai", {
  nodes: [
    ["path", { d: "M10 21.8A10 10 0 1 1 21.8 10" }, { r: "draw", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
