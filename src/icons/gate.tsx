import { createIcon } from "../runtime/createIcon.js";

export const Gate = createIcon("Gate", "gate", {
  nodes: [
    ["path", { d: "M3 3v18" }, { r: "fade", o: [3, 12] }],
    ["path", { d: "M21 3v18" }, { r: "fade", o: [21, 12] }],
    ["path", { d: "M3 7q5.5 0 9 3v9H3M7.5 7.5V19" }, { r: "flip", o: [7.5, 13] }],
    ["path", { d: "M21 7q-5.5 0-9 3v9h9M16.5 7.5V19" }, { r: "flip", d: 0.08, o: [16.5, 13] }],
  ],
});
