import { icon } from "../icon.js";

export const Milestone = icon("Milestone", "milestone", {
  nodes: [
    ["path", { d: "M12 13v8" }, { r: "grow", o: [12, 17] }],
    ["path", { d: "M12 3v3" }, { r: "grow", o: [12, 4.5] }],
    [
      "path",
      { d: "M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" },
      { r: "swing", a: 8, o: [12, 9.5] },
    ],
  ],
});
