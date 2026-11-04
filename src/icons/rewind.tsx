import { createIcon } from "../runtime/createIcon.js";

export const Rewind = createIcon("Rewind", "rewind", {
  nodes: [
    ["path", { d: "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" }, { r: "slide", d: 0.08, x: -1, a: 2, o: [7, 12] }],
    ["path", { d: "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" }, { r: "slide", x: -1, a: 2, o: [17, 12] }],
  ],
});
