import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mediapipe" (CC0-1.0). MediaPipe is a trademark of its owner.
export const BrandMediapipe = createIcon("BrandMediapipe", "brand-mediapipe", {
  nodes: [
    ["path", { d: "M4.5 3.5v9" }, { r: "grow", o: [4.5, 3.5] }],
    ["path", { d: "M4.5 19.5h.01" }, { r: "pop", d: 0.1, o: [4.5, 19.5] }],
    ["path", { d: "M9.5 4.5h.01" }, { r: "pop", d: 0.15, o: [9.5, 4.5] }],
    ["path", { d: "M9.5 10.5v9" }, { r: "grow", d: 0.2, o: [9.5, 19.5] }],
    ["path", { d: "M14.5 4.5h.01" }, { r: "pop", d: 0.25, o: [14.5, 4.5] }],
    ["path", { d: "M14.5 10.5v9" }, { r: "grow", d: 0.3, o: [14.5, 19.5] }],
    ["path", { d: "M19.5 3.5v16" }, { r: "grow", d: 0.35, o: [19.5, 19.5] }],
  ],
});
