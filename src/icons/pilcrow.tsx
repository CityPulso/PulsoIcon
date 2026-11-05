import { createIcon } from "../runtime/createIcon.js";

export const Pilcrow = createIcon("Pilcrow", "pilcrow", {
  text: true,
  nodes: [
    ["path", { d: "M13 4v16" }, { r: "grow", d: 0.15, o: [13, 12] }],
    ["path", { d: "M17 4v16" }, { r: "grow", d: 0.23, o: [17, 12] }],
    ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }, { r: "redraw", o: [12, 8.5] }],
  ],
});
