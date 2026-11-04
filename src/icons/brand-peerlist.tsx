import { createIcon } from "../runtime/createIcon.js";

export const BrandPeerlist = createIcon("BrandPeerlist", "brand-peerlist", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9.5 17V7h3.5a3 3 0 0 1 0 6H9.5" }, { r: "draw", d: 0.05, o: [12, 12] }],
  ],
});
