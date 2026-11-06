import { icon } from "../icon.js";

export const Chocolate = icon("Chocolate", "chocolate", {
  nodes: [
    ["path", { d: "M19 16V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M14 22c0-1.7 1.3-3 3-3 0-1.7.5-2.6 2-3" }, { r: "pop", d: 0.15, o: [16.5, 19] }],
    ["path", { d: "M12 2v20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M5 8.5h14" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M5 15h12.5" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
