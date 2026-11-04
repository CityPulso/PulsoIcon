import { createIcon } from "../runtime/createIcon.js";

export const SpellCheck = createIcon("SpellCheck", "spell-check", {
  nodes: [
    ["path", { d: "m20 15-5.5 5.5L12 18" }, { r: "draw", d: 0.1, o: [16, 17.75] }],
    ["path", { d: "m4 16 6-12 5.115 10.23" }, { r: "press", a: 0.06, o: [9.558, 10] }],
    ["path", { d: "M6 12h8" }, { r: "press", a: 0.06, o: [9.558, 10] }],
  ],
});
