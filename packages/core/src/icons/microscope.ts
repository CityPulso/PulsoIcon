import { icon } from "../icon.js";

export const Microscope = icon("Microscope", "microscope", {
  nodes: [
    ["path", { d: "M6 18h8" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M3 22h18" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }, { r: "fade", o: [17, 15] }],
    ["path", { d: "M9 14h2" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }, { r: "turn", a: -10, o: [10, 14] }],
    ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }, { r: "turn", a: -10, o: [10, 14] }],
  ],
});
