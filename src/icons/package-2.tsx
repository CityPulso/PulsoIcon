import { createIcon } from "../runtime/createIcon.js";

export const Package2 = createIcon("Package2", "package-2", {
  nodes: [
    ["path", { d: "M12 3v6" }, { r: "lift", d: 0.05, o: [12, 6] }],
    [
      "path",
      { d: "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" },
      { r: "press", a: 0.04, o: [12, 21] },
    ],
    ["path", { d: "M3.054 9.013h17.893" }, { r: "growX", d: 0.1, o: [12, 9.013] }],
  ],
});
