import { icon } from "../icon.js";

// Drawn after Phosphor Icons "selection-background" (MIT, Copyright (c) 2023 Phosphor Icons).
export const SelectionBackground = icon("SelectionBackground", "selection-background", {
  nodes: [
    ["rect", { x: "3", y: "8", width: "13", height: "13", rx: "2" }, { r: "press", a: 0.06, o: [9.5, 14.5] }],
    ["path", { d: "M8 5a2 2 0 0 1 2-2" }, { r: "fade", d: 0.1, o: [14.5, 9.5] }],
    ["path", { d: "M14 3h1" }, { r: "fade", d: 0.16, o: [14.5, 9.5] }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }, { r: "fade", d: 0.22, o: [14.5, 9.5] }],
    ["path", { d: "M21 9.5v1" }, { r: "fade", d: 0.28, o: [14.5, 9.5] }],
    ["path", { d: "M21 14a2 2 0 0 1-2 2" }, { r: "fade", d: 0.34, o: [14.5, 9.5] }],
  ],
});
