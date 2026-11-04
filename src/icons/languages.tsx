import { createIcon } from "../runtime/createIcon.js";

export const Languages = createIcon("Languages", "languages", {
  nodes: [
    ["path", { d: "m5 8 6 6" }, { r: "flip", o: [8, 8] }],
    ["path", { d: "m4 14 6-6 2-3" }, { r: "flip", o: [8, 8] }],
    ["path", { d: "M2 5h12" }, { r: "flip", o: [8, 8] }],
    ["path", { d: "M7 2h1" }, { r: "flip", o: [8, 8] }],
    ["path", { d: "m22 22-5-10-5 10" }, { r: "flip", d: 0.1, o: [17, 17] }],
    ["path", { d: "M14 18h6" }, { r: "flip", d: 0.1, o: [17, 17] }],
  ],
});
