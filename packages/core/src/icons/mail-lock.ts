import { icon } from "../icon.js";

export const MailLock = icon("MailLock", "mail-lock", {
  nodes: [
    ["path", { d: "M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "15", y: "16", width: "7", height: "6", rx: "1" }, { r: "shake", d: 0.1, a: 0.8, o: [18.5, 19] }],
    ["path", { d: "M16.5 16v-2a2 2 0 0 1 4 0v2" }, { r: "lift", o: [18.5, 14] }],
  ],
});
