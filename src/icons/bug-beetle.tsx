import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "bug-beetle" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BugBeetle = createIcon("BugBeetle", "bug-beetle", {
  svg: { r: "wobble", a: 5 },
  nodes: [
    ["path", { d: "M6 11a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0z" }],
    ["path", { d: "M6 11h12" }],
    ["path", { d: "M12 11v10" }],
    ["path", { d: "M9.5 5.6 7.5 3" }, { r: "swing", a: 10, o: [12, 6] }],
    ["path", { d: "M14.5 5.6 16.5 3" }, { r: "swing", a: 10, o: [12, 6] }],
    ["path", { d: "M3 9h3.3" }, { r: "shake", d: 0.05, a: 0.6 }],
    ["path", { d: "M3 13h3" }, { r: "shake", d: 0.1, a: 0.6 }],
    ["path", { d: "M3 17h3.3" }, { r: "shake", d: 0.15, a: 0.6 }],
    ["path", { d: "M17.7 9H21" }, { r: "shake", d: 0.05, a: 0.6 }],
    ["path", { d: "M18 13h3" }, { r: "shake", d: 0.1, a: 0.6 }],
    ["path", { d: "M17.7 17H21" }, { r: "shake", d: 0.15, a: 0.6 }],
  ],
});
