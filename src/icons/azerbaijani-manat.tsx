import { createIcon } from "../runtime/createIcon.js";

export const AzerbaijaniManat = createIcon("AzerbaijaniManat", "azerbaijani-manat", {
  nodes: [
    ["path", { d: "M12 4v16" }, { r: "grow", d: 0.2, o: [12, 12] }],
    ["path", { d: "M18 20v-8a6 6 0 00-12 0v8" }, { r: "draw", o: [12, 13] }],
  ],
});
