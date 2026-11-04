import { createIcon } from "../runtime/createIcon.js";

export const Geyser = createIcon("Geyser", "geyser", {
  nodes: [
    ["path", { d: "M3 21c2-2.5 4-3.5 6-3.5h6c2 0 4 1 6 3.5" }, { r: "press", a: 0.08, o: [12, 21] }],
    ["path", { d: "M10.5 17.5 10 8.5M13.5 17.5l.5-9" }, { r: "grow", d: 0.05, o: [12, 17.5] }],
    ["path", { d: "M12 2v3M8 3.5 9.5 6M16 3.5 14.5 6" }, { r: "pop", d: 0.2, o: [12, 6] }],
    ["path", { d: "M6.5 14c-1-1.5 1-2.5 0-4.5M17.5 14c1-1.5-1-2.5 0-4.5" }, { r: "float", d: 0.25, a: 1.5, o: [12, 12] }],
  ],
});
