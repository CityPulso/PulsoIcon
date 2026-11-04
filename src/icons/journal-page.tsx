import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "journal-page" (MIT, Copyright (c) 2021 Luca Burgio).
export const JournalPage = createIcon("JournalPage", "journal-page", {
  nodes: [
    ["path", { d: "M6 6L14 6" }, { r: "growX", o: [6, 6] }],
    ["path", { d: "M6 10H18" }, { r: "growX", d: 0.08, o: [6, 10] }],
    ["path", { d: "M13 14L18 14" }, { r: "growX", d: 0.16, o: [13, 14] }],
    ["path", { d: "M13 18L18 18" }, { r: "growX", d: 0.24, o: [13, 18] }],
    [
      "path",
      {
        d: "M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H18.2515C18.4106 2 18.5632 2.06321 18.6757 2.17574L21.8243 5.32426C21.9368 5.43679 22 5.5894 22 5.74853V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z",
      },
    ],
    ["path", { d: "M6 18V14H9V18H6Z" }, { r: "pop", d: 0.2, o: [7.5, 16] }],
    ["path", { d: "M18 2V5.4C18 5.73137 18.2686 6 18.6 6H22" }],
  ],
});
