import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareVoiceSparkle = createIcon("MessageSquareVoiceSparkle", "message-square-voice-sparkle", {
  nodes: [
    ["path", { d: "M14 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-6" }, { r: "press", a: 0.04, o: [12, 12.5] }],
    ["path", { d: "M6.5 10v2" }, { r: "grow", d: 0.05, o: [6.5, 11] }],
    ["path", { d: "M9.5 7.5v7" }, { r: "grow", d: 0.12, o: [9.5, 11] }],
    ["path", { d: "M12.5 9v4" }, { r: "grow", d: 0.19, o: [12.5, 11] }],
    ["path", { d: "M19 9a3.99 3.99 0 0 1 3-3a3.99 3.99 0 0 1-3-3a3.99 3.99 0 0 1-3 3a3.99 3.99 0 0 1 3 3" }, { r: "twinkle", d: 0.05, o: [19, 6] }],
  ],
});
