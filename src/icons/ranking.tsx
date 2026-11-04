import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "ranking" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Ranking = createIcon("Ranking", "ranking", {
  nodes: [
    ["path", { d: "M2 20h20" }, { r: "draw", o: [12, 20] }],
    ["path", { d: "M9 20V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v15" }, { r: "grow", o: [12, 20] }],
    ["path", { d: "M9 11H4a1 1 0 0 0-1 1v8" }, { r: "grow", d: 0.1, o: [6, 20] }],
    ["path", { d: "M15 15h5a1 1 0 0 1 1 1v4" }, { r: "grow", d: 0.2, o: [18, 20] }],
    ["path", { d: "M11 9.5 12.5 8v5" }, { r: "pop", d: 0.35, o: [12, 10.5] }],
  ],
});
