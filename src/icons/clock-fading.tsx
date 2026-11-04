import { createIcon } from "../runtime/createIcon.js";

export const ClockFading = createIcon("ClockFading", "clock-fading", {
  nodes: [
    ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 6v6l4 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
