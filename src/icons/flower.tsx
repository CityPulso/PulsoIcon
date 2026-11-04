import { createIcon } from "../runtime/createIcon.js";

export const Flower = createIcon("Flower", "flower", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 7.5V9" }, { r: "fade", d: 0.15, o: [12, 12] }],
    ["path", { d: "M7.5 12H9" }, { r: "fade", d: 0.18, o: [12, 12] }],
    ["path", { d: "M16.5 12H15" }, { r: "fade", d: 0.21, o: [12, 12] }],
    ["path", { d: "M12 16.5V15" }, { r: "fade", d: 0.24, o: [12, 12] }],
    ["path", { d: "m8 8 1.88 1.88" }, { r: "fade", d: 0.27, o: [12, 12] }],
    ["path", { d: "M14.12 9.88 16 8" }, { r: "fade", d: 0.3, o: [12, 12] }],
    ["path", { d: "m8 16 1.88-1.88" }, { r: "fade", d: 0.33, o: [12, 12] }],
    ["path", { d: "M14.12 14.12 16 16" }, { r: "fade", d: 0.36, o: [12, 12] }],
  ],
});
