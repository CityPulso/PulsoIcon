import { icon } from "../icon.js";

// Drawn after Phosphor Icons "eyes" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Eyes = icon("Eyes", "eyes", {
  nodes: [
    ["ellipse", { cx: "6.75", cy: "12", rx: "4", ry: "8" }, { r: "blink", d: 0.3, o: [6.75, 12] }],
    ["ellipse", { cx: "17.25", cy: "12", rx: "4", ry: "8" }, { r: "blink", d: 0.3, o: [17.25, 12] }],
    ["circle", { cx: "5", cy: "12.5", r: "1.5" }, { r: "slide", x: 1, a: 2.5, o: [5, 12.5] }],
    ["circle", { cx: "15.5", cy: "12.5", r: "1.5" }, { r: "slide", x: 1, a: 2.5, o: [15.5, 12.5] }],
  ],
});
