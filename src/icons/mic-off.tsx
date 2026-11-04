import { createIcon } from "../runtime/createIcon.js";

export const MicOff = createIcon("MicOff", "mic-off", {
  nodes: [
    ["path", { d: "M12 19v3" }, { r: "fade", o: [12, 12.009] }],
    ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }, { r: "fade", o: [12, 12.009] }],
    ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2" }, { r: "fade", o: [12, 12.009] }],
    ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2" }, { r: "fade", o: [12, 12.009] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }, { r: "fade", o: [12, 12.009] }],
  ],
});
