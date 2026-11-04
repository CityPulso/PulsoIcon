import { createIcon } from "../runtime/createIcon.js";

export const MailDot = createIcon("MailDot", "mail-dot", {
  nodes: [
    ["path", { d: "M12.674 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.675" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m2 7 9 5.701a2 2 0 0 0 2 0l1.084-.686" }, { r: "draw", d: 0.05, o: [8.042, 9.984] }],
    ["circle", { cx: "19", cy: "7", r: "3" }, { r: "pop", d: 0.15, o: [19, 7] }],
  ],
});
