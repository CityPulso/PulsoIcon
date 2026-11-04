import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "mouse-middle-click" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MouseMiddleClick = createIcon("MouseMiddleClick", "mouse-middle-click", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 2v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M5 10h5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 10h5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "10", y: "6", width: "4", height: "6", rx: "2" }, { r: "press", d: 0.05, a: 0.3, o: [12, 9] }],
  ],
});
