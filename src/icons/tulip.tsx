import { createIcon } from "../runtime/createIcon.js";

export const Tulip = createIcon("Tulip", "tulip", {
  nodes: [
    ["path", { d: "M12 13c-3 0-5-2-5-5V4l2.5 2L12 3l2.5 3L17 4v4c0 3-2 5-5 5Z" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "M12 13v9" }, { r: "sway", a: 4, o: [12, 22] }],
    ["path", { d: "M12 21c-3 0-5-2-6-4.5 3 0 5.5 1.5 6 4.5" }, { r: "sway", d: 0.1, a: -6, o: [12, 22] }],
    ["path", { d: "M12 19c2.5 0 4.5-1.5 5.5-4-3 0-5 1.5-5.5 4" }, { r: "sway", d: 0.1, a: 6, o: [12, 22] }],
  ],
});
