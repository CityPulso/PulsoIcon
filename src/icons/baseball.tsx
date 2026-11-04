import { createIcon } from "../runtime/createIcon.js";

export const Baseball = createIcon("Baseball", "baseball", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M5 4.9a10 10 0 0 1 0 14.2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M19 4.9a10 10 0 0 0 0 14.2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m6 7 2-1M7 10.5h2M7 13.5h2M6 17l2 1" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m18 7-2-1M17 10.5h-2M17 13.5h-2M18 17l-2 1" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
