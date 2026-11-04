import { createIcon } from "../runtime/createIcon.js";

export const EighthNotes = createIcon("EighthNotes", "eighth-notes", {
  svg: { r: "bounce", y: -1, a: 2 },
  nodes: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19" }, { r: "jelly", d: 0.1, a: 0.08, o: [15, 10.5] }],
    ["circle", { cx: "18", cy: "16", r: "3" }],
    ["circle", { cx: "6", cy: "19", r: "3" }],
  ],
});
