import { createIcon } from "../runtime/createIcon.js";

export const BriefcaseMedical = createIcon("BriefcaseMedical", "briefcase-medical", {
  nodes: [
    ["path", { d: "M12 11v4" }, { r: "pop", d: 0.15, o: [12, 13] }],
    ["path", { d: "M14 13h-4" }, { r: "pop", d: 0.15, o: [12, 13] }],
    ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }, { r: "lift", d: 0.1, o: [12, 4] }],
    ["path", { d: "M18 6v14" }, { r: "fade", d: 0.2, o: [12, 13] }],
    ["path", { d: "M6 6v14" }, { r: "fade", d: 0.2, o: [12, 13] }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }, { r: "press", a: 0.05, o: [12, 13] }],
  ],
});
