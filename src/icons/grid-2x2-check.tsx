import { createIcon } from "../runtime/createIcon.js";

export const Grid2X2Check = createIcon("Grid2X2Check", "grid-2x2-check", {
  nodes: [
    ["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m16 19 2 2 4-4" }, { r: "draw", d: 0.15, o: [19, 19] }],
  ],
});
