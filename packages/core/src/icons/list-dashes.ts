import { icon } from "../icon.js";

// Drawn after Phosphor Icons "list-dashes" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ListDashes = icon("ListDashes", "list-dashes", {
  nodes: [
    ["path", { d: "M3 5h2" }, { r: "pop", o: [4, 5] }],
    ["path", { d: "M3 12h2" }, { r: "pop", d: 0.06, o: [4, 12] }],
    ["path", { d: "M3 19h2" }, { r: "pop", d: 0.12, o: [4, 19] }],
    ["path", { d: "M9 5h12" }, { r: "growX", d: 0.05, o: [9, 12] }],
    ["path", { d: "M9 12h12" }, { r: "growX", d: 0.11, o: [9, 12] }],
    ["path", { d: "M9 19h12" }, { r: "growX", d: 0.17, o: [9, 12] }],
  ],
});
