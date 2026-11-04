import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "submit-document" (MIT, Copyright (c) 2021 Luca Burgio).
export const SubmitDocument = createIcon("SubmitDocument", "submit-document", {
  nodes: [
    [
      "path",
      {
        d: "M20 13V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H14",
      },
    ],
    ["path", { d: "M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" }],
    ["path", { d: "M16 19H22M22 19L19 16M22 19L19 22" }, { r: "slide", x: 1, y: 0 }],
  ],
});
