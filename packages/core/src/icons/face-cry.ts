import { icon } from "../icon.js";

export const FaceCry = icon("FaceCry", "face-cry", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M17 12.5c-.6.8-1 1.4-1 2a1 1 0 0 0 2 0c0-.6-.4-1.2-1-2" }, { r: "drop", d: 0.15, y: -1, a: 1.5, o: [17, 14] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M9 16.5a4 4 0 0 1 5 0" }, { r: "fold", d: 0.1, o: [11.5, 16] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
