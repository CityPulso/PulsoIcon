import { createIcon } from "../runtime/createIcon.js";

export const DatabaseCheck = createIcon("DatabaseCheck", "database-check", {
  nodes: [
    ["path", { d: "m16 19 2 2 4-4" }, { r: "draw", d: 0.2, o: [19, 19] }],
    ["path", { d: "M21 13.127V5" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "float", a: 1, o: [12, 5] }],
  ],
});
