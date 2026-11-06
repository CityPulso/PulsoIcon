import { icon } from "../icon.js";

export const ShelvingUnit = icon("ShelvingUnit", "shelving-unit", {
  nodes: [
    ["path", { d: "M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }, { r: "drop", d: 0.05, a: 3, o: [10, 10] }],
    ["path", { d: "M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }, { r: "drop", d: 0.15, a: 3, o: [14, 18] }],
    ["path", { d: "M20 22V2" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M4 12h16" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M4 20h16" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M4 2v20" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M4 4h16" }, { r: "press", a: 0.03, o: [12, 22] }],
  ],
});
