import { createIcon } from "../runtime/createIcon.js";

export const NotepadText = createIcon("NotepadText", "notepad-text", {
  nodes: [
    ["path", { d: "M8 2v4" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M12 2v4" }, { r: "lift", d: 0.05, o: [12, 4] }],
    ["path", { d: "M16 2v4" }, { r: "lift", d: 0.1, o: [12, 4] }],
    ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 10h6" }, { r: "growX", d: 0.15, o: [8, 14] }],
    ["path", { d: "M8 14h8" }, { r: "growX", d: 0.2, o: [8, 14] }],
    ["path", { d: "M8 18h5" }, { r: "growX", d: 0.25, o: [8, 14] }],
  ],
});
