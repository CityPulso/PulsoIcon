import { createIcon } from "../runtime/createIcon.js";

export const FileShield = createIcon("FileShield", "file-shield", {
  nodes: [
    ["path", { d: "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v2.5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    [
      "path",
      {
        d: "M21 17c0 2.5-1.75 3.75-3.83 4.47a.5.5 0 0 1-.34 0C14.75 20.75 13 19.5 13 17v-3.5a.5.5 0 0 1 .5-.5c1 0 2.25-.6 3.12-1.36a.58.58 0 0 1 .76 0C18.26 12.4 19.5 13 20.5 13a.5.5 0 0 1 .5.5z",
      },
      { r: "pulse", d: 0.1, a: 0.1, o: [17, 16.5] },
    ],
  ],
});
