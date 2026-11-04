import { createIcon } from "../runtime/createIcon.js";

export const Terminal = createIcon("Terminal", "terminal", {
  nodes: [
    ["path", { d: "M12 19h8" }, { r: "flicker", d: 0.05, o: [16, 19] }],
    ["path", { d: "m4 17 6-6-6-6" }, { r: "slide", x: 1, a: 1.5, o: [7, 11] }],
  ],
});
