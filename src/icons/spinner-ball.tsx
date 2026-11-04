import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "spinner-ball" (MIT, Copyright (c) 2023 Phosphor Icons).

export const SpinnerBall = createIcon("SpinnerBall", "spinner-ball", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 2a5 5 0 0 1 0 10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M22 12a5 5 0 0 1-10 0" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 22a5 5 0 0 1 0-10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M2 12a5 5 0 0 1 10 0" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
