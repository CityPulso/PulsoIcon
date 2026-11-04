import { createIcon } from "../runtime/createIcon.js";

export const Hamburger = createIcon("Hamburger", "hamburger", {
  nodes: [
    ["path", { d: "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" }, { r: "sway", d: 0.1, a: 3, o: [12, 14] }],
    ["path", { d: "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" }, { r: "float", a: 1.5, o: [12, 7.5] }],
    ["path", { d: "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" }, { r: "press", d: 0.15, a: 0.06, o: [12, 18.5] }],
    ["path", { d: "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }, { r: "jelly", d: 0.05, a: 0.15, o: [12.71, 14.5] }],
  ],
});
