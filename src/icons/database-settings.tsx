import { createIcon } from "../runtime/createIcon.js";

export const DatabaseSettings = createIcon("DatabaseSettings", "database-settings", {
  nodes: [
    ["path", { d: "M21 10.5V5" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 12a9 3 0 0 0 7.599 2.963" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 5v14a9 3 0 0 0 8.148 2.987" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "float", a: 1, o: [12, 5] }],
    ["path", { d: "M14 15h8" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 20h8" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M16.5 13.5v3" }, { r: "slide", d: 0.1, x: 1, a: 2, o: [16.5, 15] }],
    ["path", { d: "M19.5 18.5v3" }, { r: "slide", d: 0.2, x: -1, a: 2, o: [19.5, 20] }],
  ],
});
