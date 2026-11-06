import { icon } from "../icon.js";

export const Sofa = icon("Sofa", "sofa", {
  nodes: [
    ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }, { r: "float", d: 0.05, a: 1, o: [12, 8.5] }],
    ["path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }, { r: "press", a: 0.04, o: [12, 18] }],
    ["path", { d: "M4 18v2" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M20 18v2" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M12 4v9" }, { r: "float", d: 0.05, a: 1, o: [12, 8.5] }],
  ],
});
