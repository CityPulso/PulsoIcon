import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "phone-list" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PhoneList = createIcon("PhoneList", "phone-list", {
  nodes: [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      },
      { r: "ring", a: 8, o: [12, 12] },
    ],
    ["path", { d: "M15 3h7" }, { r: "growX", d: 0.1, o: [15, 3] }],
    ["path", { d: "M15 7h7" }, { r: "growX", d: 0.15, o: [15, 7] }],
    ["path", { d: "M17 11h5" }, { r: "growX", d: 0.2, o: [17, 11] }],
  ],
});
