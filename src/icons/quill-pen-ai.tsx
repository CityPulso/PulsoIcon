import { createIcon } from "../runtime/createIcon.js";

export const QuillPenAi = createIcon("QuillPenAi", "quill-pen-ai", {
  text: true,
  nodes: [
    ["path", { d: "M20 3c-7 0-12 4-12.5 13 2.5-.15 4.6-.8 6.3-1.9" }, { r: "tilt", a: 10, o: [4, 20] }],
    ["path", { d: "M17.6 11.5C19.2 9.3 20 6.4 20 3" }, { r: "tilt", a: 10, o: [4, 20] }],
    ["path", { d: "M16 7 4 20" }, { r: "tilt", a: 10, o: [4, 20] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.4 }],
  ],
});
