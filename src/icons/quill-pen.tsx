import { createIcon } from "../runtime/createIcon.js";

export const QuillPen = createIcon("QuillPen", "quill-pen", {
  nodes: [
    ["path", { d: "M20 3c-7 0-12 4-12.5 13C16 15.5 20 10 20 3z" }, { r: "tilt", a: 10, o: [4, 20] }],
    ["path", { d: "M16 7 4 20" }, { r: "tilt", a: 10, o: [4, 20] }],
    ["path", { d: "M10 21h10" }, { r: "draw", d: 0.2 }],
  ],
});
