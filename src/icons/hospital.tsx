import { createIcon } from "../runtime/createIcon.js";

export const Hospital = createIcon("Hospital", "hospital", {
  nodes: [
    ["path", { d: "M12 7v4" }, { r: "spin", d: 0.1, a: 90, o: [12, 9] }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }, { r: "grow", d: 0.2, o: [12, 21] }],
    ["path", { d: "M14 9h-4" }, { r: "spin", d: 0.1, a: 90, o: [12, 9] }],
    ["path", { d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
