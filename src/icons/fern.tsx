import { createIcon } from "../runtime/createIcon.js";

export const Fern = createIcon("Fern", "fern", {
  nodes: [
    ["path", { d: "M12 22V3" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M12 18c-2 0-4-1-6-3" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M12 18c2 0 4-1 6-3" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M12 13.5c-1.5 0-3-.8-4.5-2.5" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M12 13.5c1.5 0 3-.8 4.5-2.5" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M12 9c-1 0-2-.5-3-1.8" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M12 9c1 0 2-.5 3-1.8" }, { r: "sway", a: 5, o: [12, 22] }],
  ],
});
