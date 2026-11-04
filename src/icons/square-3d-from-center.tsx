import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "square-3d-from-center" (MIT, Copyright (c) 2021 Luca Burgio).
export const Square3dFromCenter = createIcon("Square3dFromCenter", "square-3d-from-center", {
  nodes: [
    [
      "path",
      { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" },
      { r: "pulse", d: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M12 12h.01" }, { r: "pop", a: 0.6, o: [12, 12] }],
  ],
});
