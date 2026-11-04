import { createIcon } from "../runtime/createIcon.js";

export const BriefcaseBusiness = createIcon("BriefcaseBusiness", "briefcase-business", {
  nodes: [
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.15, o: [12.005, 12] }],
    ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }, { r: "lift", d: 0.05, o: [12, 4] }],
    ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0" }, { r: "fade", d: 0.1, o: [12, 14.502] }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }, { r: "press", a: 0.04, o: [12, 13] }],
  ],
});
