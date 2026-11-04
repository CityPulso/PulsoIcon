import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "keyframe-position" (MIT, Copyright (c) 2021 Luca Burgio).
export const KeyframePosition = createIcon("KeyframePosition", "keyframe-position", {
  nodes: [
    [
      "path",
      {
        d: "M16.6799 9.38411L12.4609 14.4469C12.2211 14.7347 11.7789 14.7347 11.5391 14.4469L7.32009 9.38411C7.13467 9.1616 7.13467 8.8384 7.32009 8.61589L11.5391 3.55312C11.7789 3.26527 12.2211 3.26527 12.4609 3.55312L16.6799 8.61589C16.8653 8.8384 16.8653 9.1616 16.6799 9.38411Z",
      },
      { r: "bounce", x: 0, y: -1, o: [12, 9] },
    ],
    ["path", { d: "M3 20L12 20M21 20H12M12 20V17" }, { r: "growX", o: [12, 20] }],
  ],
});
