import { createIcon } from "../runtime/createIcon.js";

export const InfoOff = createIcon("InfoOff", "info-off", {
  nodes: [
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 17v-2" }, { r: "grow", d: 0.2, o: [12, 17] }],
    ["path", { d: "M12 8h.01" }, { r: "drop", d: 0.15, o: [12.005, 8] }],
  ],
});
