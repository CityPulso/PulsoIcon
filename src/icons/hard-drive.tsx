import { createIcon } from "../runtime/createIcon.js";

export const HardDrive = createIcon("HardDrive", "hard-drive", {
  nodes: [
    ["path", { d: "M10 16h.01" }, { r: "flicker", d: 0.2, o: [10.005, 16] }],
    [
      "path",
      { d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M21.946 12.013H2.054" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 16h.01" }, { r: "flicker", d: 0.1, o: [6.005, 16] }],
  ],
});
