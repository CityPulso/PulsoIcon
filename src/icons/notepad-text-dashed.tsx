import { createIcon } from "../runtime/createIcon.js";

export const NotepadTextDashed = createIcon("NotepadTextDashed", "notepad-text-dashed", {
  nodes: [
    ["path", { d: "M8 2v4" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 2v4" }, { r: "fade", d: 0.03, o: [12, 12] }],
    ["path", { d: "M16 2v4" }, { r: "fade", d: 0.06, o: [12, 12] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "fade", d: 0.09, o: [12, 12] }],
    ["path", { d: "M20 12v2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1" }, { r: "fade", d: 0.15, o: [12, 12] }],
    ["path", { d: "M13 22h-2" }, { r: "fade", d: 0.18, o: [12, 12] }],
    ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2" }, { r: "fade", d: 0.21, o: [12, 12] }],
    ["path", { d: "M4 14v-2" }, { r: "fade", d: 0.24, o: [12, 12] }],
    ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2" }, { r: "fade", d: 0.27, o: [12, 12] }],
    ["path", { d: "M8 10h6" }, { r: "growX", d: 0.2, o: [8, 14] }],
    ["path", { d: "M8 14h8" }, { r: "growX", d: 0.25, o: [8, 14] }],
    ["path", { d: "M8 18h5" }, { r: "growX", d: 0.3, o: [8, 14] }],
  ],
});
