import { createIcon } from "../runtime/createIcon.js";

export const TowerControl = createIcon("TowerControl", "tower-control", {
  nodes: [
    ["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }, { r: "float", a: 1, o: [12, 7.5] }],
    ["path", { d: "M8 13v9" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M16 22v-9" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "m9 6 1 7" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "m15 6-1 7" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M12 6V2" }, { r: "float", a: 1, o: [12, 7.5] }],
    ["path", { d: "M13 2h-2" }, { r: "float", a: 1, o: [12, 7.5] }],
  ],
});
