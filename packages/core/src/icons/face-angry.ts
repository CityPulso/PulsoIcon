import { icon } from "../icon.js";

export const FaceAngry = icon("FaceAngry", "face-angry", {
  nodes: [
    ["path", { d: "M15 12v-1.584" }, { r: "pop", d: 0.1, o: [15, 11.208] }],
    ["path", { d: "M17 10a5 5 0 00-3 1" }, { r: "turn", a: 12, o: [15.5, 10.5] }],
    ["path", { d: "M7 10a5 5 0 013 1" }, { r: "turn", a: -12, o: [8.5, 10.5] }],
    ["path", { d: "M9 12v-1.584" }, { r: "pop", d: 0.14, o: [9, 11.208] }],
    ["path", { d: "M9 17a5 5 0 016.001 0" }, { r: "press", d: 0.15, a: 0.2, o: [12.001, 16.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "shake", a: 1, o: [12, 12] }],
  ],
});
