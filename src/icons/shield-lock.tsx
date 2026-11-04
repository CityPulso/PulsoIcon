import { createIcon } from "../runtime/createIcon.js";

export const ShieldLock = createIcon("ShieldLock", "shield-lock", {
  nodes: [
    [
      "path",
      { d: "M20 9.807V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 3.88 2.107 6.254 5 7.796" },
      { r: "press", a: 0.04, o: [12, 11.398] },
    ],
    ["path", { d: "M19 17v-2a2 2 0 00-4 0v2" }, { r: "lift", d: 0.05, o: [17, 15] }],
    ["rect", { x: "13", y: "17", width: "8", height: "5", rx: "1" }, { r: "shake", d: 0.15, a: 0.8, o: [17, 19.5] }],
  ],
});
