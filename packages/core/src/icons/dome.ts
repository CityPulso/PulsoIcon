import { icon } from "../icon.js";

export const Dome = icon("Dome", "dome", {
  nodes: [
    ["path", { d: "M10 21v-3a2 2 0 014 0v3" }, { r: "grow", d: 0.2, o: [12, 21] }],
    ["path", { d: "M12 2v2" }, { r: "grow", d: 0.05, o: [12, 4] }],
    ["path", { d: "M18 12v9" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
    ["path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a1 1 0 011-1h18a1 1 0 011 1z" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
    ["path", { d: "M4 12a8 8 0 0116 0" }, { r: "lift", o: [12, 8] }],
    ["path", { d: "M6 12v9" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
  ],
});
