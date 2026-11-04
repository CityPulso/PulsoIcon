import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareVoice = createIcon("MessageSquareVoice", "message-square-voice", {
  nodes: [
    ["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }, { r: "press", a: 0.04, o: [12, 12.5] }],
    ["path", { d: "M7.5 10v2" }, { r: "grow", d: 0.05, o: [7.5, 11] }],
    ["path", { d: "M10.5 7.5v7" }, { r: "grow", d: 0.12, o: [10.5, 11] }],
    ["path", { d: "M13.5 9v4" }, { r: "grow", d: 0.19, o: [13.5, 11] }],
    ["path", { d: "M16.5 8v6" }, { r: "grow", d: 0.26, o: [16.5, 11] }],
  ],
});
