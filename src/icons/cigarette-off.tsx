import { createIcon } from "../runtime/createIcon.js";

export const CigaretteOff = createIcon("CigaretteOff", "cigarette-off", {
  nodes: [
    ["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }, { r: "fade", o: [12, 9.5] }],
    ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }, { r: "fade", o: [12, 9.5] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }, { r: "fade", o: [12, 9.5] }],
    ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }, { r: "fade", o: [12, 9.5] }],
    ["path", { d: "M7 12v4" }, { r: "fade", o: [12, 9.5] }],
  ],
});
