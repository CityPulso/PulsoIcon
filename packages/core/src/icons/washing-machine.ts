import { icon } from "../icon.js";

export const WashingMachine = icon("WashingMachine", "washing-machine", {
  nodes: [
    ["path", { d: "M3 6h3" }, { r: "fade", o: [10.005, 6] }],
    ["path", { d: "M17 6h.01" }, { r: "fade", o: [10.005, 6] }],
    ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2" }, { r: "shake", a: 0.6, o: [12, 12] }],
    ["circle", { cx: "12", cy: "13", r: "5" }, { r: "spin", a: 720, o: [12, 13] }],
    ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }, { r: "spin", a: 720, o: [12, 13] }],
  ],
});
