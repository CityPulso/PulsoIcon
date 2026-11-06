import { icon } from "../icon.js";

export const University = icon("University", "university", {
  nodes: [
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }, { r: "grow", d: 0.15, o: [12, 21] }],
    ["path", { d: "M18 12h.01" }, { r: "flicker", d: 0.15, o: [12.005, 14] }],
    ["path", { d: "M18 16h.01" }, { r: "flicker", d: 0.25, o: [12.005, 14] }],
    [
      "path",
      { d: "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" },
      { r: "press", a: 0.03, o: [12, 21] },
    ],
    ["path", { d: "M6 12h.01" }, { r: "flicker", d: 0.1, o: [12.005, 14] }],
    ["path", { d: "M6 16h.01" }, { r: "flicker", d: 0.2, o: [12.005, 14] }],
    ["circle", { cx: "12", cy: "10", r: "2" }, { r: "spin", d: 0.05, a: 360, o: [12, 10] }],
  ],
});
