import { createIcon } from "../runtime/createIcon.js";

export const Balloon = createIcon("Balloon", "balloon", {
  svg: { r: "float", a: 2 },
  nodes: [
    ["path", { d: "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" }, { r: "sway", d: 0.1, a: -8, o: [12, 16] }],
    ["path", { d: "M12 6a2 2 0 0 1 2 2" }],
    ["path", { d: "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" }, { r: "sway", a: 5, o: [12, 16] }],
  ],
});
