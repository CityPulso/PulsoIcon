import { createIcon } from "../runtime/createIcon.js";

export const Tie = createIcon("Tie", "tie", {
  nodes: [
    ["path", { d: "M10 2h4l-.8 3h-2.4z" }],
    ["path", { d: "M10.8 5 8.5 16.5 12 21l3.5-4.5L13.2 5" }, { r: "swing", a: 12, o: [12, 5] }],
  ],
});
