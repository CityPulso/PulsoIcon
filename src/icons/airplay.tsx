import { createIcon } from "../runtime/createIcon.js";

export const Airplay = createIcon("Airplay", "airplay", {
  nodes: [
    ["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "m12 15 5 6H7Z" }, { r: "bounce", d: 0.05, y: -1, a: 2, o: [12, 18] }],
  ],
});
