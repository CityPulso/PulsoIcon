import { createIcon } from "../runtime/createIcon.js";

export const CoinSquareHole = createIcon("CoinSquareHole", "coin-square-hole", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "flip", o: [12, 12] }],
    ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1" }, { r: "flip", o: [12, 12] }],
  ],
});
