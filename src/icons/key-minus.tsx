import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "key-minus" (MIT, Copyright (c) 2021 Luca Burgio).
export const KeyMinus = createIcon("KeyMinus", "key-minus", {
  nodes: [
    ["path", { d: "M14.9922 18H17.9922H20.9922" }, { r: "pop", o: [18, 18] }],
    [
      "path",
      {
        d: "M12.4123 10.3431C13.9744 11.9052 16.5071 11.9052 18.0692 10.3431C19.6313 8.78105 19.6313 6.24839 18.0692 4.68629C16.5071 3.1242 13.9744 3.1242 12.4123 4.68629C10.8502 6.24839 10.8502 8.78105 12.4123 10.3431ZM12.4123 10.3431L3.92706 18.8284L6.04838 20.9497",
      },
      { r: "turn", a: -20, o: [15, 7] },
    ],
    ["path", { d: "M6.75549 16L8.87681 18.1213" }, { r: "turn", a: -20, o: [15, 7] }],
  ],
});
