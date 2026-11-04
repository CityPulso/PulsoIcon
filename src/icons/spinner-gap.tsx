import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "spinner-gap" (MIT, Copyright (c) 2023 Phosphor Icons).

export const SpinnerGap = createIcon("SpinnerGap", "spinner-gap", {
  nodes: [
    ["path", { d: "M12 2v4" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M18 12h4" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m16.2 16.2 2.9 2.9" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 18v4" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m4.9 19.1 2.9-2.9" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M2 12h4" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m4.9 4.9 2.9 2.9" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
