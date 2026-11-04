import { createIcon } from "../runtime/createIcon.js";

export const FileImage = createIcon("FileImage", "file-image", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["circle", { cx: "10", cy: "12", r: "2" }, { r: "rise", d: 0.1, a: 2, o: [10, 12] }],
    ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }, { r: "draw", d: 0.2, o: [14.5, 18.499] }],
  ],
});
