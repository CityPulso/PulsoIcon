import { createIcon } from "../runtime/createIcon.js";

export const TriangleAlert = createIcon("TriangleAlert", "triangle-alert", {
  nodes: [
    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }, { r: "shake", a: 1, o: [11.99, 11.993] }],
    ["path", { d: "M12 9v4" }, { r: "grow", d: 0.1, o: [12, 9] }],
    ["path", { d: "M12 17h.01" }, { r: "pop", d: 0.25, o: [12.005, 17] }],
  ],
});
