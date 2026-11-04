import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "clock-countdown" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ClockCountdown = createIcon("ClockCountdown", "clock-countdown", {
  nodes: [
    ["path", { d: "M12 2a10 10 0 1 0 10 10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6.5V12h5.5" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M15.5 3h.01" }, { r: "pop", d: 0.3, o: [15.51, 3] }],
    ["path", { d: "M18.5 5.5h.01" }, { r: "pop", d: 0.2, o: [18.5, 5.5] }],
    ["path", { d: "M21 8.5h.01" }, { r: "pop", d: 0.1, o: [21, 8.5] }],
  ],
});
