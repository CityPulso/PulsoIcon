import { icon } from "../icon.js";

export const Install = icon("Install", "install", {
  nodes: [
    ["path", { d: "M8 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M12 2v11" }, { r: "bounce", y: 1, a: 2, o: [12, 8] }],
    ["path", { d: "m8 9 4 4 4-4" }, { r: "bounce", y: 1, a: 2, o: [12, 8] }],
    ["path", { d: "M8 17h8" }, { r: "growX", d: 0.2, o: [12, 17] }],
  ],
});
