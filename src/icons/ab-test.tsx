import { createIcon } from "../runtime/createIcon.js";

export const AbTest = createIcon("AbTest", "ab-test", {
  text: true,
  nodes: [
    ["path", { d: "m3 17 3.5-10 3.5 10" }, { r: "slide", d: 0.1, x: -1, a: 1, o: [6.5, 12] }],
    ["path", { d: "M4.2 14h4.6" }, { r: "slide", d: 0.1, x: -1, a: 1, o: [6.5, 12] }],
    ["path", { d: "M12 3v18" }, { r: "grow", o: [12, 12] }],
    ["path", { d: "M15 12h3.5a2.5 2.5 0 0 1 0 5H15V7h3a2.5 2.5 0 0 1 0 5" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [18, 12] }],
  ],
});
