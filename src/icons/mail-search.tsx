import { createIcon } from "../runtime/createIcon.js";

export const MailSearch = createIcon("MailSearch", "mail-search", {
  nodes: [
    ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }, { r: "swing", d: 0.1, a: 15, o: [18, 18] }],
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [18, 18] }],
    ["path", { d: "m22 22-1.5-1.5" }, { r: "swing", d: 0.1, a: 15, o: [18, 18] }],
  ],
});
