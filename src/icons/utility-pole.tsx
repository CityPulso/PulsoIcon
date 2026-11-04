import { createIcon } from "../runtime/createIcon.js";

export const UtilityPole = createIcon("UtilityPole", "utility-pole", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M2 5h20" }, { r: "sway", a: 3, o: [12, 5] }],
    ["path", { d: "M3 3v2" }, { r: "sway", a: 3, o: [12, 5] }],
    ["path", { d: "M7 3v2" }, { r: "sway", a: 3, o: [12, 5] }],
    ["path", { d: "M17 3v2" }, { r: "sway", a: 3, o: [12, 5] }],
    ["path", { d: "M21 3v2" }, { r: "sway", a: 3, o: [12, 5] }],
    ["path", { d: "m19 5-7 7-7-7" }, { r: "sway", d: 0.05, a: 5, o: [12, 8] }],
  ],
});
