import { createIcon } from "../runtime/createIcon.js";

export const Vault = createIcon("Vault", "vault", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.2, o: [7.5, 7.5] }],
    ["path", { d: "m7.9 7.9 2.7 2.7" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
    ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.24, o: [16.5, 7.5] }],
    ["path", { d: "m13.4 10.6 2.7-2.7" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
    ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.28, o: [7.5, 16.5] }],
    ["path", { d: "m7.9 16.1 2.7-2.7" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
    ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.32, o: [16.5, 16.5] }],
    ["path", { d: "m13.4 13.4 2.7 2.7" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
  ],
});
