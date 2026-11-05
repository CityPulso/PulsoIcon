import { createIcon } from "../runtime/createIcon.js";

// Solid from Phosphor Icons "chat" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const MessageSquareOff = createIcon("MessageSquareOff", "message-square-off", {
  nodes: [
    ["path", { d: "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" }, { r: "press", a: 0.04, o: [12, 12.506] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M8.656 3H20a2 2 0 0 1 2 2v11.344" }, { r: "press", a: 0.04, o: [12, 12.506] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M21.75 6V18a1.5 1.5 0 0 1-1.5 1.5H7.781l-3.056 2.64-0.008 0.007A1.49 1.49 0 0 1 3.75 22.5a1.505 1.505 0 0 1-0.637-0.143A1.485 1.485 0 0 1 2.25 21V6A1.5 1.5 0 0 1 3.75 4.5H20.25A1.5 1.5 0 0 1 21.75 6Z",
        stroke: "none",
      },
      { r: "press", a: 0.04, o: [12, 12.506] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
