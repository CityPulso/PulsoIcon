import { createIcon } from "../runtime/createIcon.js";

export const Subscript = createIcon("Subscript", "subscript", {
  nodes: [
    ["path", { d: "m4 5 8 8" }, { r: "spin", a: 90, o: [8, 9] }],
    ["path", { d: "m12 5-8 8" }, { r: "spin", a: 90, o: [8, 9] }],
    [
      "path",
      { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" },
      { r: "drop", d: 0.1, y: 1, a: -3, o: [18, 15.498] },
    ],
  ],
});
