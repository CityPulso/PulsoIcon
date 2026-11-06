import { icon } from "../icon.js";

// Drawn after Phosphor Icons "dots-three-circle-vertical" (MIT, Copyright (c) 2023 Phosphor Icons).

export const DotsThreeCircleVertical = icon("DotsThreeCircleVertical", "dots-three-circle-vertical", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 7h.01" }, { r: "pop", o: [12.005, 7] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.08, o: [12.005, 12] }],
    ["path", { d: "M12 17h.01" }, { r: "pop", d: 0.16, o: [12.005, 17] }],
  ],
});
