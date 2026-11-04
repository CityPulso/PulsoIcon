import { createIcon } from "../runtime/createIcon.js";

export const BrandOllama = createIcon("BrandOllama", "brand-ollama", {
  nodes: [
    ["path", { d: "M8.2 8.6 7.6 3.6a1 1 0 0 1 1.9-.4l1 4.3" }, { r: "swing", a: -14, o: [9, 8] }],
    ["path", { d: "M15.8 8.6l.6-5a1 1 0 0 0-1.9-.4l-1 4.3" }, { r: "swing", d: 0.06, a: 14, o: [15, 8] }],
    ["path", { d: "M6.5 21v-8.5a5.5 5.5 0 0 1 11 0V21" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["ellipse", { cx: "12", cy: "15.8", rx: "3", ry: "2.1" }, { r: "pop", d: 0.12, o: [12, 15.8] }],
    ["path", { d: "M9.5 12h.01" }, { r: "blink", d: 0.2, o: [12, 12] }],
    ["path", { d: "M14.5 12h.01" }, { r: "blink", d: 0.2, o: [12, 12] }],
  ],
});
