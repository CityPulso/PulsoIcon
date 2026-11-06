import { icon } from "../icon.js";

export const School = icon("School", "school", {
  nodes: [
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }, { r: "grow", d: 0.1, o: [12, 21] }],
    ["path", { d: "M18 4.933V21" }, { r: "fade", o: [12, 12.967] }],
    ["path", { d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" }, { r: "float", a: 1, o: [12, 4] }],
    ["path", { d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 4.933V21" }, { r: "fade", o: [12, 12.967] }],
    ["circle", { cx: "12", cy: "9", r: "2" }, { r: "spin", d: 0.05, a: 360, o: [12, 9] }],
  ],
});
