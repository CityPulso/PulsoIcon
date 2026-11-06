import { icon } from "../icon.js";

export const Lungs = icon("Lungs", "lungs", {
  nodes: [
    ["path", { d: "M12 3v8" }, { r: "press", a: 0.03, o: [12, 11] }],
    ["path", { d: "m9 14 3-3 3 3" }, { r: "press", a: 0.03, o: [12, 11] }],
    ["path", { d: "M8.5 6.5C5 7 3 12 3 17c0 1.7 1.3 3 3 3 2 0 3-1.5 3-3.5V7.5c0-.6-.2-1-.5-1z" }, { r: "pulse", a: 0.08, o: [9, 13] }],
    ["path", { d: "M15.5 6.5C19 7 21 12 21 17c0 1.7-1.3 3-3 3-2 0-3-1.5-3-3.5V7.5c0-.6.2-1 .5-1z" }, { r: "pulse", a: 0.08, o: [15, 13] }],
  ],
});
