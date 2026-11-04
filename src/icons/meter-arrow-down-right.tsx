import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "meter-arrow-down-right" (MIT, Copyright (c) 2021 Luca Burgio).
export const MeterArrowDownRight = createIcon("MeterArrowDownRight", "meter-arrow-down-right", {
  nodes: [
    ["path", { d: "M2.49999 3.50011L7 7.99977M7 7.99977L6.99999 4.00011M7 7.99977L3.00009 7.99988" }, { r: "slide", x: 1, y: 1, a: 1.5 }],
    ["path", { d: "M15 16L11.5 12.5" }, { r: "turn", d: 0.1, a: -40, o: [15, 16] }],
    [
      "path",
      {
        d: "M14.5 9C10.3579 9 7 12.2832 7 16.3333C7 17.4668 7.26298 18.5401 7.73253 19.4983C7.88808 19.8157 8.22018 20 8.57365 20H20.4264C20.7798 20 21.1119 19.8157 21.2675 19.4983C21.737 18.5401 22 17.4668 22 16.3333C22 12.2832 18.6421 9 14.5 9Z",
      },
    ],
  ],
});
