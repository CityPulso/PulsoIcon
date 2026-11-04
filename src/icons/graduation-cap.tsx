import { createIcon } from "../runtime/createIcon.js";

export const GraduationCap = createIcon("GraduationCap", "graduation-cap", {
  nodes: [
    [
      "path",
      { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" },
      { r: "float", a: 2, o: [12.009, 10] },
    ],
    ["path", { d: "M22 10v6" }, { r: "swing", d: 0.05, a: 20, o: [22, 10] }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }, { r: "press", d: 0.1, a: 0.05, o: [12, 19] }],
  ],
});
