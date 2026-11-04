import { createIcon } from "../runtime/createIcon.js";

export const PhoneOutgoing = createIcon("PhoneOutgoing", "phone-outgoing", {
  nodes: [
    ["path", { d: "m16 8 6-6" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19, 5] }],
    ["path", { d: "M22 8V2h-6" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19, 5] }],
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      },
      { r: "ring", a: 8, o: [12, 12] },
    ],
  ],
});
