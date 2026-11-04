import { createIcon } from "../runtime/createIcon.js";

export const BroomSparkles = createIcon("BroomSparkles", "broom-sparkles", {
  nodes: [
    ["path", { d: "M11 2v2" }, { r: "twinkle", d: 0.2, o: [11, 3] }],
    ["path", { d: "M12 3h-2" }, { r: "twinkle", d: 0.24, o: [11, 3] }],
    ["path", { d: "M13.5 10.5 22 2" }, { r: "tilt", a: 15, o: [16, 8] }],
    [
      "path",
      { d: "M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z" },
      { r: "tilt", a: 15, o: [16, 8] },
    ],
    ["path", { d: "M20 15v4" }, { r: "twinkle", d: 0.28, o: [20, 17] }],
    ["path", { d: "M22 17h-4" }, { r: "twinkle", d: 0.32, o: [20, 17] }],
    ["path", { d: "M4 4v4" }, { r: "twinkle", d: 0.36, o: [4, 6] }],
    ["path", { d: "m5 18 2-2" }, { r: "twinkle", d: 0.4, o: [6, 17] }],
    ["path", { d: "M6 6H2" }, { r: "twinkle", d: 0.44, o: [4, 6] }],
    ["path", { d: "m7.699 10.7 5.602 5.601" }, { r: "tilt", a: 15, o: [16, 8] }],
  ],
});
