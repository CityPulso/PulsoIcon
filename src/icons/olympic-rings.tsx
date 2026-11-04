import { createIcon } from "../runtime/createIcon.js";

export const OlympicRings = createIcon("OlympicRings", "olympic-rings", {
  nodes: [
    ["circle", { cx: "5.5", cy: "10", r: "3" }, { r: "pop", d: 0, o: [5.5, 10] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "pop", d: 0.06, o: [12, 10] }],
    ["circle", { cx: "18.5", cy: "10", r: "3" }, { r: "pop", d: 0.12, o: [18.5, 10] }],
    ["circle", { cx: "8.75", cy: "13.5", r: "3" }, { r: "pop", d: 0.18, o: [8.75, 13.5] }],
    ["circle", { cx: "15.25", cy: "13.5", r: "3" }, { r: "pop", d: 0.24, o: [15.25, 13.5] }],
  ],
});
