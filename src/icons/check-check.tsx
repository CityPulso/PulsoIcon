import { createIcon } from "../runtime/createIcon.js";

export const CheckCheck = createIcon("CheckCheck", "check-check", {
  nodes: [
    ["path", { d: "M18 6 7 17l-5-5" }, { r: "draw", o: [10, 11.5] }],
    ["path", { d: "m22 10-7.5 7.5L13 16" }, { r: "draw", d: 0.2, o: [17.5, 13.75] }],
  ],
});
