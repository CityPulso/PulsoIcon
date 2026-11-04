import { createIcon } from "../runtime/createIcon.js";

export const Curtain = createIcon("Curtain", "curtain", {
  nodes: [
    ["path", { d: "M2 3h20" }, { r: "growX", o: [12, 3] }],
    ["path", { d: "M4 3v18h2.5C7 15 10 10 10 3" }, { r: "slide", x: -1, a: 1.2, o: [7, 12] }],
    ["path", { d: "M20 3v18h-2.5C17 15 14 10 14 3" }, { r: "slide", x: 1, a: 1.2, o: [17, 12] }],
  ],
});
