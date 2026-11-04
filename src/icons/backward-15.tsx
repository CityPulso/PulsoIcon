import { createIcon } from "../runtime/createIcon.js";

export const Backward15 = createIcon("Backward15", "backward-15", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }, { r: "turn", a: -45, o: [12, 12] }],
    ["path", { d: "M3 3v5h5" }, { r: "turn", a: -45, o: [12, 12] }],
    ["path", { d: "M8 10l1.5-1v6" }, { r: "pop", d: 0.15, o: [8.75, 12] }],
    ["path", { d: "M16 9h-3v2.5h1.5a1.75 1.75 0 0 1 0 3.5H12.5" }, { r: "pop", d: 0.22, o: [14.25, 12] }],
  ],
});
