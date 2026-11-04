import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "cooling-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const CoolingSquare = createIcon("CoolingSquare", "cooling-square", {
  nodes: [
    ["path", { d: "M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" }],
    ["path", { d: "M12 7L12 12M12 17L12 12M12 12L7.5 9.5M12 12L16.5 14.5M12 12L16.5 9.5M12 12L7.5 14.5" }, { r: "spin", a: 120, o: [12, 12] }],
  ],
});
