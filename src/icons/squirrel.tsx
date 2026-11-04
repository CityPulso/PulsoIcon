import { createIcon } from "../runtime/createIcon.js";

export const Squirrel = createIcon("Squirrel", "squirrel", {
  nodes: [
    ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5" }, { r: "fade", o: [14.518, 19.5] }],
    ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }, { r: "swing", a: -10, o: [16, 20] }],
    ["path", { d: "M18 13h.01" }, { r: "blink", d: 0.15, o: [18.005, 13] }],
    [
      "path",
      { d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" },
      { r: "float", d: 0.05, a: 1, o: [10, 12] },
    ],
  ],
});
