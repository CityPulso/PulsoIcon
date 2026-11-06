import { icon } from "../icon.js";

// Adapted from Tabler Icons "salt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Salt = icon("Salt", "salt", {
  nodes: [
    ["path", { d: "M12 13v.01" }, { r: "drop", d: 0.25, a: 3 }],
    ["path", { d: "M10 16v.01" }, { r: "drop", d: 0.3, a: 3 }],
    ["path", { d: "M14 16v.01" }, { r: "drop", d: 0.35, a: 3 }],
    ["path", { d: "M7.5 8h9l-.281 -2.248a2 2 0 0 0 -1.985 -1.752h-4.468a2 2 0 0 0 -1.986 1.752l-.28 2.248" }, { r: "lift", y: -1 }],
    ["path", { d: "M7.5 8l-1.612 9.671a2 2 0 0 0 1.973 2.329h8.278a2 2 0 0 0 1.973 -2.329l-1.612 -9.671" }, { r: "shake", d: 0.05, o: [12, 14] }],
  ],
});
