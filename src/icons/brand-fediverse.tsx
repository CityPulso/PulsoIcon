import { createIcon } from "../runtime/createIcon.js";

export const BrandFediverse = createIcon("BrandFediverse", "brand-fediverse", {
  nodes: [
    ["path", { d: "M13.62 5.18L18.47 8.7" }, { r: "draw", d: 0 }],
    ["path", { d: "M19.47 11.78L17.61 17.47" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M15 19.38L9 19.38" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6.39 17.47L4.53 11.78" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5.53 8.7L10.38 5.18" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "12", cy: "4", r: "2" }, { r: "pop", d: 0, o: [12, 4] }],
    ["circle", { cx: "20.08", cy: "9.87", r: "2" }, { r: "pop", d: 0.06, o: [20.1, 9.9] }],
    ["circle", { cx: "17", cy: "19.38", r: "2" }, { r: "pop", d: 0.12, o: [17, 19.4] }],
    ["circle", { cx: "7", cy: "19.38", r: "2" }, { r: "pop", d: 0.18, o: [7, 19.4] }],
    ["circle", { cx: "3.92", cy: "9.87", r: "2" }, { r: "pop", d: 0.24, o: [3.9, 9.9] }],
  ],
});
