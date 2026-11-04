import { createIcon } from "../runtime/createIcon.js";

export const Church = createIcon("Church", "church", {
  nodes: [
    ["path", { d: "M10 9h4" }, { r: "spin", a: 90, o: [12, 9] }],
    ["path", { d: "M12 7v5" }, { r: "spin", a: 90, o: [12, 9] }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }, { r: "grow", d: 0.2, o: [12, 21] }],
    ["path", { d: "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
