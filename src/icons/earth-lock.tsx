import { createIcon } from "../runtime/createIcon.js";

export const EarthLock = createIcon("EarthLock", "earth-lock", {
  nodes: [
    ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3" }, { r: "spin", a: 45, o: [10, 12] }],
    ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }, { r: "spin", a: 45, o: [10, 12] }],
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }, { r: "fade", o: [18.27, 18.27] }],
    ["path", { d: "M12 2a10 10 0 1 0 9.54 13" }, { r: "spin", a: 45, o: [10, 12] }],
    ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }, { r: "lift", d: 0.1, o: [18, 4] }],
    ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }, { r: "shake", d: 0.2, a: 0.8, o: [18, 8.5] }],
  ],
});
