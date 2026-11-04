import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "weightsandbiases" (CC0-1.0). Weights & Biases is a trademark of its owner.
export const BrandWeightsAndBiases = createIcon("BrandWeightsAndBiases", "brand-weights-and-biases", {
  nodes: [
    ["path", { d: "M6 4h.01" }, { r: "pop", o: [6, 4] }],
    ["circle", { cx: "6", cy: "9", r: "1.5" }, { r: "pop", d: 0.05, o: [6, 9] }],
    ["path", { d: "M6 14h.01" }, { r: "pop", d: 0.1, o: [6, 14] }],
    ["circle", { cx: "6", cy: "19", r: "1.5" }, { r: "pop", d: 0.15, o: [6, 19] }],
    ["path", { d: "M12 4h.01M12 9h.01M12 19.5h.01" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "14", r: "1.5" }, { r: "pop", d: 0.2, o: [12, 14] }],
    ["circle", { cx: "18", cy: "4.5", r: "1.5" }, { r: "pop", d: 0.2, o: [18, 4.5] }],
    ["path", { d: "M18 9.5h.01M18 19h.01" }, { r: "pop", d: 0.25, o: [18, 14] }],
    ["circle", { cx: "18", cy: "14", r: "1.5" }, { r: "pop", d: 0.3, o: [18, 14] }],
  ],
});
