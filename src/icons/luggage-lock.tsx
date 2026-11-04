import { createIcon } from "../runtime/createIcon.js";

export const LuggageLock = createIcon("LuggageLock", "luggage-lock", {
  nodes: [
    ["path", { d: "M11 21H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }, { r: "lift", a: 0, y: -1, o: [12, 5] }],
    ["path", { d: "M8 11v6" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }, { r: "shake", d: 0.15, a: 0.8, o: [18, 19.5] }],
    ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }, { r: "lift", d: 0.05, o: [18, 15] }],
  ],
});
