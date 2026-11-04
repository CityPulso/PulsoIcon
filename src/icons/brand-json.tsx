import { createIcon } from "../runtime/createIcon.js";

export const BrandJson = createIcon("BrandJson", "brand-json", {
  nodes: [
    ["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" }, { r: "slide", x: -1, a: 1, o: [5.5, 12] }],
    ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }, { r: "slide", x: 1, a: 1, o: [18.5, 12] }],
    ["path", { d: "M9 12h.01" }, { r: "pop", d: 0.1, o: [9, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.16, o: [12, 12] }],
    ["path", { d: "M15 12h.01" }, { r: "pop", d: 0.22, o: [15, 12] }],
  ],
});
