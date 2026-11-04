import { createIcon } from "../runtime/createIcon.js";

export const LogOut = createIcon("LogOut", "log-out", {
  nodes: [
    ["path", { d: "m16 17 5-5-5-5" }, { r: "shoot", x: 1, a: 3, o: [15, 12] }],
    ["path", { d: "M21 12H9" }, { r: "shoot", x: 1, a: 3, o: [15, 12] }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }, { r: "press", d: 0.1, a: 0.04, o: [6, 12] }],
  ],
});
