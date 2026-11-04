import { createIcon } from "../runtime/createIcon.js";

export const Anchor = createIcon("Anchor", "anchor", {
  svg: { r: "swing", a: 12, o: [12, 4] },
  nodes: [
    ["path", { d: "M12 6v16" }],
    ["path", { d: "m19 13 2-1a9 9 0 0 1-18 0l2 1" }],
    ["path", { d: "M9 11h6" }],
    ["circle", { cx: "12", cy: "4", r: "2" }, { r: "pop", o: [12, 4] }],
  ],
});
