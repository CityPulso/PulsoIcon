import { icon } from "../icon.js";

// Drawn after Phosphor Icons "circles-three-plus" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CirclesThreePlus = icon("CirclesThreePlus", "circles-three-plus", {
  nodes: [
    ["circle", { cx: "6.5", cy: "6.5", r: "3.5" }, { r: "pop", o: [6.5, 6.5] }],
    ["circle", { cx: "17.5", cy: "6.5", r: "3.5" }, { r: "pop", d: 0.06, o: [17.5, 6.5] }],
    ["circle", { cx: "6.5", cy: "17.5", r: "3.5" }, { r: "pop", d: 0.12, o: [6.5, 17.5] }],
    ["path", { d: "M14 17.5h7M17.5 14v7" }, { r: "spin", d: 0.2, a: 90, o: [17.5, 17.5] }],
  ],
});
