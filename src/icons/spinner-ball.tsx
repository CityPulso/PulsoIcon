import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "spinner-ball" (MIT, Copyright (c) 2023 Phosphor Icons).

// Solid from Phosphor Icons "spinner-ball" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const SpinnerBall = createIcon("SpinnerBall", "spinner-ball", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 2a5 5 0 0 1 0 10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M22 12a5 5 0 0 1-10 0" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 22a5 5 0 0 1 0-10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M2 12a5 5 0 0 1 10 0" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm3.667 2.362C15.96 7.848 14.531 9.322 12.656 10.651c-0.211-2.295-0.791-4.669-3.597-6.358a8.24 8.24 0 0 1 6.609 0.319ZM3.767 12.519c2.657-1.875 4.647-1.376 6.738-0.412C8.625 13.438 6.862 15.128 6.799 18.399A8.242 8.242 0 0 1 3.767 12.519Zm12.797 6.35c-2.948-1.364-3.513-3.336-3.723-5.625 1.193 0.549 2.467 1.008 3.872 1.008 1.062 0 2.199-0.262 3.434-0.945A8.269 8.269 0 0 1 16.564 18.869Z",
        stroke: "none",
      },
      { r: "spin", a: 360, o: [12, 12] },
    ],
  ],
});
