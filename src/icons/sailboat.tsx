import { createIcon } from "../runtime/createIcon.js";

export const Sailboat = createIcon("Sailboat", "sailboat", {
  nodes: [
    ["path", { d: "M10 2v15" }, { r: "sway", a: 6, o: [10, 17] }],
    ["path", { d: "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" }, { r: "sway", a: 3, o: [12, 19] }],
    ["path", { d: "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" }, { r: "sway", a: 6, o: [10, 17] }],
  ],
});
