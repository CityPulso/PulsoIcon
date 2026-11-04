import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "paddlepaddle" (CC0-1.0). PaddlePaddle is a trademark of its owner.
export const BrandPaddlepaddle = createIcon("BrandPaddlepaddle", "brand-paddlepaddle", {
  nodes: [
    ["path", { d: "M2 14h5.5M6.5 10 3.5 18.5" }, { r: "pop", o: [5, 14] }],
    ["path", { d: "M8 19l3.5-9H13a2 2 0 0 1 0 4h-2.8" }, { r: "draw", d: 0.1, o: [11, 14] }],
    ["path", { d: "M14.5 19l3.5-9h1.5a2 2 0 0 1 0 4h-2.8" }, { r: "draw", d: 0.2, o: [17.5, 14] }],
    ["path", { d: "M12.5 6h.01M19.5 6h.01" }, { r: "bounce", d: 0.3, y: -1, a: 1, o: [16, 6] }],
  ],
});
