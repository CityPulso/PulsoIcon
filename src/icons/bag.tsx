import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "bag" (MIT, Copyright (c) 2021 Luca Burgio).
// Solid from Phosphor Icons "bag" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const Bag = createIcon("Bag", "bag", {
  nodes: [
    [
      "path",
      {
        d: "M4.50828 20H19.4917C19.785 20 20.0353 19.788 20.0836 19.4986L21.8836 8.69864C21.9445 8.33292 21.6625 8 21.2917 8H2.70828C2.33751 8 2.05549 8.33292 2.11644 8.69864L3.91644 19.4986C3.96466 19.788 4.21497 20 4.50828 20Z",
      },
      { r: "swing", a: 6, o: [12, 4] },
    ],
    ["path", { d: "M7 8V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V8" }, { r: "swing", a: 6, o: [12, 4] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M20.25 6H16.5a4.5 4.5 0 0 0-9 0H3.75A1.5 1.5 0 0 0 2.25 7.5V18.75a1.5 1.5 0 0 0 1.5 1.5H20.25a1.5 1.5 0 0 0 1.5-1.5V7.5A1.5 1.5 0 0 0 20.25 6ZM9 9.75a0.75 0.75 0 0 1-1.5 0V8.25a0.75 0.75 0 0 1 1.5 0Zm3-6.75a3 3 0 0 1 3 3H9A3 3 0 0 1 12 3Zm4.5 6.75a0.75 0.75 0 0 1-1.5 0V8.25a0.75 0.75 0 0 1 1.5 0Z",
        stroke: "none",
      },
      { r: "swing", a: 6, o: [12, 4] },
    ],
  ],
});
