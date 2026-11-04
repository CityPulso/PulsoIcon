import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "accessibility-tech" (MIT, Copyright (c) 2021 Luca Burgio).
export const AccessibilityTech = createIcon("AccessibilityTech", "accessibility-tech", {
  nodes: [
    ["path", { d: "M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z" }],
    ["path", { d: "M12.5 12.1605L16.5 12L16 16.5" }],
    ["path", { d: "M11.8333 12L13.5 9.53846L10.8333 8L9.5 9.84615" }],
    ["path", { d: "M15.5 7h.01" }, { r: "pop", d: 0.2, o: [15.5, 7] }],
    [
      "path",
      { d: "M10.5 18C8.84315 18 7.5 16.6569 7.5 15C7.5 13.3431 8.84315 12 10.5 12C12.1569 12 13.5 13.3431 13.5 15C13.5 16.6569 12.1569 18 10.5 18Z" },
      { r: "spin", o: [10.5, 15] },
    ],
  ],
});
