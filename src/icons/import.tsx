import { createIcon } from "../runtime/createIcon.js";

export const Import = createIcon("Import", "import", {
  nodes: [
    ["path", { d: "M12 3v12" }, { r: "bounce", y: 1, a: 2, o: [12, 9] }],
    ["path", { d: "m8 11 4 4 4-4" }, { r: "bounce", y: 1, a: 2, o: [12, 9] }],
    ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }, { r: "press", d: 0.1, a: 0.05, o: [12, 12] }],
  ],
});
