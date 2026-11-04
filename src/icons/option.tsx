import { createIcon } from "../runtime/createIcon.js";

export const Option = createIcon("Option", "option", {
  nodes: [
    ["path", { d: "M14 3h7" }, { r: "slide", x: 1, a: 1.5, o: [17.5, 3] }],
    ["path", { d: "M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
