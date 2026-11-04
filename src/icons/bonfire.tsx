import { createIcon } from "../runtime/createIcon.js";

export const Bonfire = createIcon("Bonfire", "bonfire", {
  nodes: [
    ["path", { d: "M12 2c.5 2.5 2 4 3.5 5.5S17 10.5 17 12a5 5 0 0 1-10 0c0-1.2.4-2.3 1-3.2a2 2 0 0 0 3.5 1c0-1.5-1-2.5-1-4 0-1.5 1-3 1.5-3.8Z" }, { r: "sway", a: 6, o: [12, 17] }],
    ["path", { d: "m4 21 16-4" }, { r: "press", a: 0.06, o: [12, 19] }],
    ["path", { d: "m4 17 16 4" }, { r: "press", a: 0.06, o: [12, 19] }],
    ["path", { d: "M19 5h.01" }, { r: "flicker", d: 0.1, o: [19, 5] }],
    ["path", { d: "M5 7h.01" }, { r: "flicker", d: 0.25, o: [5, 7] }],
  ],
});
