import { createIcon } from "../runtime/createIcon.js";

export const BrandAppleReminders = createIcon("BrandAppleReminders", "brand-apple-reminders", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "7.5", cy: "7.5", r: "1" }, { r: "pop", d: 0.05, o: [7.5, 7.5] }],
    ["circle", { cx: "7.5", cy: "12", r: "1" }, { r: "pop", d: 0.12, o: [7.5, 12] }],
    ["circle", { cx: "7.5", cy: "16.5", r: "1" }, { r: "pop", d: 0.19, o: [7.5, 16.5] }],
    ["path", { d: "M11.5 7.5h5" }, { r: "growX", d: 0.08, o: [11.5, 7.5] }],
    ["path", { d: "M11.5 12h5" }, { r: "growX", d: 0.15, o: [11.5, 12] }],
    ["path", { d: "M11.5 16.5h5" }, { r: "growX", d: 0.22, o: [11.5, 16.5] }],
  ],
});
