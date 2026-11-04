import { createIcon } from "../runtime/createIcon.js";

export const Galaxy = createIcon("Galaxy", "galaxy", {
  nodes: [
    ["path", { d: "M16.005 15.108a5.041 6.52 28.25 00-8.008-6.217 5.041 6.52 28.25 008.008 6.217A11.884 7.288-60.76 014.029 7.001" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M17 21h.01" }, { r: "twinkle", d: 0.15, o: [17.005, 21] }],
    ["path", { d: "M7 3h.01" }, { r: "twinkle", d: 0.25, o: [7.005, 3] }],
    ["path", { d: "M7.997 8.891a11.885 7.288-60.756 0111.977 8.107" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
