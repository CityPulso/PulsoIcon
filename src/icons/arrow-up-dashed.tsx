import { createIcon } from "../runtime/createIcon.js";

export const ArrowUpDashed = createIcon("ArrowUpDashed", "arrow-up-dashed", {
  nodes: [
    ["path", { d: "M12 20v-2" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M12 15v-2" }, { r: "fade", d: 0.06, o: [12, 14] }],
    ["path", { d: "M12 10V5" }, { r: "bounce", d: 0.12, y: -1, a: 2, o: [12, 7.5] }],
    ["path", { d: "m5 12 7-7 7 7" }, { r: "bounce", d: 0.12, y: -1, a: 2, o: [12, 8.5] }],
  ],
});
