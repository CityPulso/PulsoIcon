import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "timeline-event-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TimelineEventX = createIcon("TimelineEventX", "timeline-event-x", {
  nodes: [
    ["path", { d: "M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0, o: [12, 20] }],
    ["path", { d: "M10 20h-6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M14 20h6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2" }, { r: "float", d: 0.1, o: [12, 9] }],
    ["path", { d: "M13.5 9.5l-3 -3" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10.5 9.5l3 -3" }, { r: "draw", d: 0.42 }],
  ],
});
