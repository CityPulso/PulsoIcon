import { icon } from "../icon.js";

export const TextCursorInput = icon("TextCursorInput", "text-cursor-input", {
  nodes: [
    ["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" }, { r: "flicker", o: [9, 12] }],
    ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [17.5, 12] }],
    ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }, { r: "fade", d: 0.05, o: [3.5, 12] }],
    ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" }, { r: "flicker", o: [9, 12] }],
    ["path", { d: "M9 6v12" }, { r: "flicker", o: [9, 12] }],
  ],
});
