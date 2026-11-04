import { createIcon } from "../runtime/createIcon.js";

export const SunMedium = createIcon("SunMedium", "sun-medium", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M12 3v1" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M12 20v1" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M3 12h1" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M20 12h1" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m18.364 5.636-.707.707" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m6.343 17.657-.707.707" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m5.636 5.636.707.707" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m17.657 17.657.707.707" }, { r: "spin", a: 45, o: [12, 12] }],
  ],
});
