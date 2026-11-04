import { createIcon } from "../runtime/createIcon.js";

export const Spatula = createIcon("Spatula", "spatula", {
  svg: { r: "tilt", o: [12, 22] },
  nodes: [
    ["rect", { x: "7", y: "2", width: "10", height: "8", rx: "2" }],
    ["path", { d: "M10.5 5v2" }],
    ["path", { d: "M13.5 5v2" }],
    ["path", { d: "M12 10v4" }],
    ["rect", { x: "10", y: "14", width: "4", height: "8", rx: "2" }],
  ],
});
