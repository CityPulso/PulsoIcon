import { createIcon } from "../runtime/createIcon.js";

export const Tooth = createIcon("Tooth", "tooth", {
  nodes: [
    [
      "path",
      {
        d: "M7 3C4.5 3 3 5 3 7.5c0 3 1.5 4.5 2 7 .5 3 1 6.5 3 6.5s2-3.5 2.5-5.5c.3-1 .9-1.5 1.5-1.5s1.2.5 1.5 1.5c.5 2 .5 5.5 2.5 5.5s2.5-3.5 3-6.5c.5-2.5 2-4 2-7C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z",
      },
      { r: "wobble", a: 6, o: [12, 12] },
    ],
  ],
});
