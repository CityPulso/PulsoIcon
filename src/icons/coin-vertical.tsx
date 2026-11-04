import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "coin-vertical" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CoinVertical = createIcon("CoinVertical", "coin-vertical", {
  nodes: [
    ["ellipse", { cx: "9.5", cy: "12", rx: "5", ry: "9" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9.5 3h5a5 9 0 0 1 0 18h-5" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M14 7.5h4.8M14 16.5h4.8" }, { r: "flip", o: [12, 12] }],
  ],
});
