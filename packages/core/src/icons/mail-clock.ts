import { icon } from "../icon.js";

export const MailClock = icon("MailClock", "mail-clock", {
  nodes: [
    ["path", { d: "M16 14v2.2l1.6 1" }, { r: "spin", d: 0.1, a: 360, o: [16, 16] }],
    ["path", { d: "m22 7-.759.484" }, { r: "fade", o: [21.621, 7.242] }],
    ["path", { d: "M6.835 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.605 10.567 2 7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "16", cy: "16", r: "6" }, { r: "pulse", d: 0.1, a: 0.05, o: [16, 16] }],
  ],
});
