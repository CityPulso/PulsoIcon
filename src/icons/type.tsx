import { createIcon } from "../runtime/createIcon.js";

export const Type = createIcon("Type", "type", {
  nodes: [
    ["path", { d: "M12 4v16" }, { r: "grow", d: 0.08, o: [12, 4] }],
    ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }, { r: "growX", o: [12, 5.5] }],
    ["path", { d: "M9 20h6" }, { r: "growX", d: 0.18, o: [12, 20] }],
  ],
});
