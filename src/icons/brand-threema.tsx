import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "threema" (CC0-1.0). Threema is a trademark of its owner.

export const BrandThreema = createIcon("BrandThreema", "brand-threema", {
  nodes: [
    ["path", { d: "M12 2c4.4 0 8 2.7 8 6s-3.6 6-8 6c-1 0-2-.1-3-.4L5 15l1-3C4.7 11 4 9.6 4 8c0-3.3 3.6-6 8-6z" }],
    ["rect", { x: "9.5", y: "7.5", width: "5", height: "3.5", rx: "1" }, { r: "shake", a: 6, o: [12, 9] }],
    ["path", { d: "M10.5 7.5V6.5a1.5 1.5 0 0 1 3 0v1" }, { r: "shake", a: 6, o: [12, 9] }],
    ["path", { d: "M7 19.5h.01" }, { r: "blink", o: [7, 19.5] }],
    ["path", { d: "M12 19.5h.01" }, { r: "blink", d: 0.1, o: [12, 19.5] }],
    ["path", { d: "M17 19.5h.01" }, { r: "blink", d: 0.2, o: [17, 19.5] }],
  ],
});
