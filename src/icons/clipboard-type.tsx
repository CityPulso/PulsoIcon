import { createIcon } from "../runtime/createIcon.js";

export const ClipboardType = createIcon("ClipboardType", "clipboard-type", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M9 12v-1h6v1" }, { r: "growX", d: 0.1, o: [12, 11.5] }],
    ["path", { d: "M11 17h2" }, { r: "growX", d: 0.3, o: [12, 17] }],
    ["path", { d: "M12 11v6" }, { r: "grow", d: 0.2, o: [12, 11] }],
  ],
});
