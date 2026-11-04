import { createIcon } from "../runtime/createIcon.js";

export const RotateCwSparkle = createIcon("RotateCwSparkle", "rotate-cw-sparkle", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M21 3v5h-5" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 15.5a3.5 3.5 0 0 1 3.5-3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1 3.5 3.5" }, { r: "twinkle", d: 0.3, o: [12, 12] }],
  ],
});
