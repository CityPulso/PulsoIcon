import { createIcon } from "../runtime/createIcon.js";

export const Package = createIcon("Package", "package", {
  nodes: [
    [
      "path",
      { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" },
      { r: "jelly", a: 0.06, o: [12, 22] },
    ],
    ["path", { d: "M12 22V12" }, { r: "grow", d: 0.1, o: [12, 22] }],
    ["polyline", { points: "3.29 7 12 12 20.71 7" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["path", { d: "m7.5 4.27 9 5.15" }, { r: "fade", d: 0.05, o: [12, 6.845] }],
  ],
});
