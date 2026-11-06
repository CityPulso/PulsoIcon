import { icon } from "../icon.js";

export const Form = icon("Form", "form", {
  nodes: [
    ["path", { d: "M4 14h6" }, { r: "growX", d: 0.1, o: [4, 14] }],
    ["path", { d: "M4 2h10" }, { r: "growX", o: [4, 2] }],
    ["rect", { x: "4", y: "18", width: "16", height: "4", rx: "1" }, { r: "press", d: 0.2, a: 0.06, o: [12, 20] }],
    ["rect", { x: "4", y: "6", width: "16", height: "4", rx: "1" }, { r: "growX", o: [4, 8] }],
  ],
});
