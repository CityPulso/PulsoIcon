import { createIcon } from "../runtime/createIcon.js";

export const TouchpadOff = createIcon("TouchpadOff", "touchpad-off", {
  nodes: [
    ["path", { d: "M12 20v-6" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19.656 14H22" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M2 14h12" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M9.656 4H20a2 2 0 0 1 2 2v10.344" }, { r: "fade", o: [12, 12] }],
  ],
  solid: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M2 14h20" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "M12 20v-6" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
