import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "cube-transparent" (MIT, Copyright (c) 2023 Phosphor Icons).

export const CubeTransparent = createIcon("CubeTransparent", "cube-transparent", {
  nodes: [
    ["path", { d: "M3 7h14v14H3z" }, { r: "press", a: 0.04, o: [10, 14] }],
    ["path", { d: "M7 3h14v14H7z" }, { r: "draw", d: 0.1 }],
    ["path", { d: "m3 7 4-4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "m17 7 4-4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "m3 21 4-4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "m17 21 4-4" }, { r: "draw", d: 0.2 }],
  ],
});
