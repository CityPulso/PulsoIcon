import { createIcon } from "../runtime/createIcon.js";

export const BorderOuter = createIcon("BorderOuter", "border-outer", {
  nodes: [
    ["path", { d: "M12 7.5h.01M7.5 12h.01M12 12h.01M16.5 12h.01M12 16.5h.01" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3" }, { r: "draw", o: [12, 12] }],
  ],
});
