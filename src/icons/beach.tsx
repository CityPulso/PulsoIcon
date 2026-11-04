import { createIcon } from "../runtime/createIcon.js";

export const Beach = createIcon("Beach", "beach", {
  nodes: [
    ["path", { d: "M4 11a8 7 0 0 1 16 0Z" }, { r: "sway", a: 5, o: [12, 20] }],
    ["path", { d: "M12 11v9" }, { r: "sway", a: 5, o: [12, 20] }],
    ["path", { d: "M12 4V3" }, { r: "sway", a: 5, o: [12, 20] }],
    ["path", { d: "M2 20q5-2 10 0t10 0" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [12, 20] }],
  ],
});
