import { icon } from "../icon.js";

export const DraftingCompass = icon("DraftingCompass", "drafting-compass", {
  nodes: [
    ["path", { d: "m12.99 6.74 1.93 3.44" }, { r: "turn", a: 12, o: [12, 5] }],
    ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0" }, { r: "turn", a: 12, o: [12, 5] }],
    ["path", { d: "m21 21-2.16-3.84" }, { r: "turn", a: 12, o: [12, 5] }],
    ["path", { d: "m3 21 8.02-14.26" }, { r: "turn", a: -12, o: [12, 5] }],
    ["circle", { cx: "12", cy: "5", r: "2" }, { r: "pop", d: 0.1, o: [12, 5] }],
  ],
});
