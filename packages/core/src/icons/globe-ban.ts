import { icon } from "../icon.js";

export const GlobeBan = icon("GlobeBan", "globe-ban", {
  nodes: [
    ["path", { d: "M12 22a14.48 14.48 0 0 1-4.008-10C7.993 9.136 9 5.258 11 2.05A10 10 0 0 0 12 22" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "M15.86 14a14.5 14.5 0 0 1-3.859 8 10 10 0 0 0 9.949-9" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "M2 12h10.5" }, { r: "spin", a: 30, o: [12, 12] }],
    ["circle", { cx: "18", cy: "6", r: "4" }, { r: "pop", d: 0.1, o: [18, 6] }],
    ["path", { d: "m15.172 3.172 5.656 5.656" }, { r: "draw", d: 0.2, o: [18, 6] }],
  ],
});
