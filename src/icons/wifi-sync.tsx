import { createIcon } from "../runtime/createIcon.js";

export const WifiSync = createIcon("WifiSync", "wifi-sync", {
  nodes: [
    ["path", { d: "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" }, { r: "spin", d: 0.05, a: 360, o: [17, 17] }],
    ["path", { d: "M11.965 14.105h4" }, { r: "spin", d: 0.05, a: 360, o: [17, 17] }],
    ["path", { d: "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" }, { r: "spin", d: 0.05, a: 360, o: [17, 17] }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }, { r: "draw", d: 0.1, o: [12, 6.91] }],
    ["path", { d: "M21.965 22.105v-4" }, { r: "spin", d: 0.05, a: 360, o: [17, 17] }],
    ["path", { d: "M5 12.86a10 10 0 0 1 3-2.032" }, { r: "draw", d: 0.05, o: [6.5, 11.844] }],
    ["path", { d: "M8.5 16.429h.01" }, { r: "pop", o: [8.505, 16.429] }],
  ],
});
