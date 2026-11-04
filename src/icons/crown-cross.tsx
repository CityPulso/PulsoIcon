import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "crown-cross" (MIT, Copyright (c) 2023 Phosphor Icons).

export const CrownCross = createIcon("CrownCross", "crown-cross", {
  nodes: [
    [
      "path",
      { d: "M6 17c-2.5-2-4-4-4-6.5a3.5 3.5 0 0 1 6.5-1.8A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 3.5 1.7 3.5 3.5 0 0 1 6.5 1.8c0 2.5-1.5 4.5-4 6.5" },
      { r: "bounce", y: -1, a: 1, o: [12, 14] },
    ],
    ["rect", { x: "6", y: "17", width: "12", height: "4", rx: "1" }, { r: "bounce", y: -1, a: 1, o: [12, 14] }],
    ["path", { d: "M12 2v5" }, { r: "twinkle", d: 0.15, o: [12, 4] }],
    ["path", { d: "M10 3.5h4" }, { r: "twinkle", d: 0.15, o: [12, 4] }],
  ],
});
