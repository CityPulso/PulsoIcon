import { createIcon } from "../runtime/createIcon.js";

export const SetSquare = createIcon("SetSquare", "set-square", {
  nodes: [
    ["path", { d: "M3 3v18h18Z" }, { r: "tilt", a: 10, o: [3, 21] }],
    ["path", { d: "M7 11v6h6Z" }, { r: "tilt", a: 10, o: [3, 21] }],
  ],
});
