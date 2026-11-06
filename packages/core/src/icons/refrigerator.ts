import { icon } from "../icon.js";

export const Refrigerator = icon("Refrigerator", "refrigerator", {
  nodes: [
    ["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M5 10h14" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M15 7v6" }, { r: "open", d: 0.05, o: [16, 10] }],
  ],
});
