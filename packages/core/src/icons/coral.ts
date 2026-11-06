import { icon } from "../icon.js";

export const Coral = icon("Coral", "coral", {
  nodes: [
    ["path", { d: "M12 21V9" }, { r: "sway", a: 5, o: [12, 21] }],
    ["path", { d: "M12 17c-3 0-5-2-5-5V9" }, { r: "sway", d: 0.05, a: -6, o: [12, 21] }],
    ["path", { d: "M7 13c-1.5 0-3-1-3-3V7" }, { r: "sway", d: 0.05, a: -6, o: [12, 21] }],
    ["path", { d: "M12 14c2.5 0 5-1.5 5-4.5V5" }, { r: "sway", d: 0.1, a: 6, o: [12, 21] }],
    ["path", { d: "M17 11c1.5 0 3-1 3-3V7" }, { r: "sway", d: 0.1, a: 6, o: [12, 21] }],
  ],
});
