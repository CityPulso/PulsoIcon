import { createIcon } from "../runtime/createIcon.js";

export const LampFloor = createIcon("LampFloor", "lamp-floor", {
  nodes: [
    ["path", { d: "M12 10v12" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" }, { r: "swing", a: 10, o: [12, 9] }],
    ["path", { d: "M9 22h6" }, { r: "press", a: 0.04, o: [12, 22] }],
  ],
});
