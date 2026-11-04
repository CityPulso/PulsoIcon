import { createIcon } from "../runtime/createIcon.js";

export const Radar = createIcon("Radar", "radar", {
  nodes: [
    ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }, { r: "fade", d: 0.1, o: [12.002, 12.001] }],
    ["path", { d: "M4 6h.01" }, { r: "flicker", d: 0.2, o: [8.005, 12] }],
    ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }, { r: "fade", d: 0.14, o: [12.002, 12.001] }],
    ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }, { r: "fade", d: 0.18, o: [12.002, 12.001] }],
    ["path", { d: "M12 18h.01" }, { r: "flicker", d: 0.28, o: [8.005, 12] }],
    ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }, { r: "fade", d: 0.22, o: [12.002, 12.001] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pulse", a: 0.2, o: [12, 12] }],
    ["path", { d: "m13.41 10.59 5.66-5.66" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
