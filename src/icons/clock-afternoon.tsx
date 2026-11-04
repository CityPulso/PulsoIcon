import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "clock-afternoon" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ClockAfternoon = createIcon("ClockAfternoon", "clock-afternoon", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M17 12h-5l3.5 3.5" }, { r: "turn", a: 30, o: [12, 12] }],
  ],
});
