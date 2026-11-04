import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "webgpu" (CC-BY-4.0). WebGPU is a trademark of its owner.
export const BrandWebgpu = createIcon("BrandWebgpu", "brand-webgpu", {
  nodes: [
    ["path", { d: "M2 6h10L7 18z" }, { r: "drop", y: -1, a: 2 }],
    ["path", { d: "M13 6h9l-4.5 9z" }, { r: "drop", y: -1, a: 2, d: 0.1 }],
    ["path", { d: "M17.5 6l-2.25 4.5h4.5z" }, { r: "pop", d: 0.25, o: [17.5, 9] }],
  ],
});
